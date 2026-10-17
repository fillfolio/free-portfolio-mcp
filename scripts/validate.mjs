#!/usr/bin/env node
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const json = path => JSON.parse(readFileSync(join(root, path), 'utf8'));
const endpoint = 'https://free-mcp.fillfolio.com/mcp', scope = ['free-portfolio:read'];
const manifests = [['.cursor-plugin/plugin.json', '.mcp.json'], ['.grok-plugin/plugin.json', 'grok.mcp.json']];
for (const [file, config] of manifests) {
  const manifest = json(file);
  assert.equal(manifest.name, 'fillfolio-free-portfolio'); assert.equal(manifest.version, '0.1.0');
  assert.equal(manifest.license, 'MIT'); assert.equal(manifest.mcpServers, config);
  assert.equal(manifest.skills, 'skills'); assert.equal(manifest.repository, 'https://github.com/fillfolio/free-portfolio-mcp');
  assert.equal(manifest.homepage, 'https://fillfolio.com/free-portfolio-mcp');
  for (const path of [manifest.logo, manifest.skills, manifest.mcpServers]) {
    assert.equal(path.startsWith('/') || path.split('/').includes('..'), false);
    assert.ok(existsSync(join(root, path)), `Missing package path ${path}`);
  }
  for (const forbidden of ['hooks', 'agents', 'commands', 'variables']) assert.equal(manifest[forbidden], undefined);
}
const cursor = json('.mcp.json'), grok = json('grok.mcp.json');
for (const config of [cursor, grok]) {
  assert.deepEqual(Object.keys(config.mcpServers), ['fillfolio-free']);
  assert.equal(config.mcpServers['fillfolio-free'].url, endpoint);
  for (const forbidden of ['command', 'headers', 'env', 'args']) assert.equal(config.mcpServers['fillfolio-free'][forbidden], undefined);
}
assert.deepEqual(cursor.mcpServers['fillfolio-free'].auth, { CLIENT_ID: 'fillfolio-free-cursor', scopes: scope });
assert.deepEqual(grok.mcpServers['fillfolio-free'].oauth, { clientId: 'fillfolio-free-grok-build', scopes: scope, callbackPort: 8788 });
assert.equal(existsSync(join(root, 'plugin.json')), false, 'A generic manifest could override host-specific OAuth settings');
const skills = readdirSync(join(root, 'skills')).sort();
assert.deepEqual(skills, ['fillfolio-free-connect', 'fillfolio-free-holdings', 'fillfolio-free-summary']);
for (const name of skills) {
  const text = readFileSync(join(root, 'skills', name, 'SKILL.md'), 'utf8');
  assert.ok(text.startsWith(`---\nname: ${name}\n`));
  assert.match(text, /\ndescription: .+/); assert.equal(text.includes('TODO'), false);
  assert.equal(text.includes('ffm_at_') || text.includes('fff_at_'), false);
}
const tools = json('contracts/tools.json').tools;
assert.deepEqual(tools.map(t => t.name).sort(), ['get_free_portfolio_summary', 'list_free_holdings']);
for (const tool of tools) {
  assert.equal(tool.annotations.readOnlyHint, true); assert.equal(tool.annotations.destructiveHint, false);
  assert.deepEqual(tool._meta.securitySchemes, [{ type: 'oauth2', scopes: scope }]);
  assert.equal(tool.inputSchema.additionalProperties, false);
}
const fixture = json('fixtures/portfolio.json');
assert.ok(fixture.holdings.length <= 3);
for (const row of fixture.holdings) { assert.match(row.name, /Synthetic/); assert.ok(row.quoteAt); assert.equal(row.source, 'manual'); }
assert.ok(readFileSync(join(root, 'LICENSE'), 'utf8').startsWith('MIT License'));
console.log('PASS: two manifests, isolated OAuth settings, three skills, two read-only tool contracts and synthetic fixture.');
