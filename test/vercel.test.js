// Test to verify Vercel serverless entry point
const assert = require('assert');

describe('Vercel Deployment Configuration', function() {
  it('should export Express app from api/index.js', function() {
    const vercelApp = require('../api/index.js');
    assert(vercelApp, 'Vercel entry point should be defined');
    assert(typeof vercelApp === 'function', 'Vercel entry point should be a function (Express app)');
  });

  it('should have same app structure as src/app.js', function() {
    const srcApp = require('../src/app');
    const vercelApp = require('../api/index.js');
    
    assert.strictEqual(vercelApp, srcApp, 'Vercel entry point should export the same app as src/app.js');
  });

  it('should have router configured', function() {
    const vercelApp = require('../api/index.js');
    assert(vercelApp._router, 'Vercel app should have router property');
  });
});
