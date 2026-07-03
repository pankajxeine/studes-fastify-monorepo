#!/usr/bin/env node

/**
 * Auth Service Code Generation Script
 * Generates TypeScript services, controllers, types, and routes from OpenAPI spec
 * 
 * Usage: node scripts/generate-auth-service.js [--force]
 * 
 * Options:
 *   --force  Overwrite existing generated files
 */

const path = require('path')
const { execSync } = require('child_process')
const fs = require('fs')

const authServiceDir = path.join(__dirname, '..', 'services', 'auth_service')
const openApiFile = path.join(authServiceDir, 'openapi', 'openapi.yaml')

// Check if OpenAPI file exists
if (!fs.existsSync(openApiFile)) {
    console.error(`❌ OpenAPI file not found: ${openApiFile}`)
    process.exit(1)
}

const force = process.argv.includes('--force')
const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
const generatedFilesToBackup = [
    path.join(authServiceDir, 'src', 'services', 'auth', 'AuthController.ts'),
    path.join(authServiceDir, 'src', 'services', 'auth', 'AuthService.ts'),
    path.join(authServiceDir, 'src', 'routes', 'auth.router.ts'),
]

// Backup existing files if they exist
if (!force) {
    const backupDir = path.join(authServiceDir, '.backups', timestamp)
    let hasBackups = false

    for (const file of generatedFilesToBackup) {
        if (fs.existsSync(file)) {
            if (!hasBackups) {
                fs.mkdirSync(backupDir, { recursive: true })
                console.log(`📦 Creating backups in ${backupDir}`)
                hasBackups = true
            }
            fs.copyFileSync(file, path.join(backupDir, path.basename(file)))
            console.log(`  📄 Backed up: ${path.basename(file)}`)
        }
    }

    if (hasBackups) {
        console.log('') // Empty line for readability
    }
}

// Run the generator
try {
    console.log('🔄 Generating Auth Service from OpenAPI...')
    console.log(`📝 OpenAPI File: ${openApiFile}`)
    console.log('')

    const command = `npm run openapi:gen -- --out ${authServiceDir} --generate-service`
    execSync(command, { stdio: 'inherit', cwd: path.join(__dirname, '..') })

    console.log('')
    console.log('✅ Auth Service generated successfully!')
    console.log('')
    console.log('📁 Generated files:')
    console.log('  ├── src/services/auth/types/')
    console.log('  │   ├── LoginRequest.ts')
    console.log('  │   ├── LoginResponse.ts')
    console.log('  │   ├── RegisterRequest.ts')
    console.log('  │   ├── RefreshTokenRequest.ts')
    console.log('  │   └── AuthUser.ts')
    console.log('  ├── src/services/auth/AuthController.ts')
    console.log('  ├── src/services/auth/AuthService.ts')
    console.log('  └── src/routes/auth.router.ts')
    console.log('')
    console.log('📋 Next steps:')
    console.log('  1. Review generated types in src/services/auth/types/')
    console.log('  2. Implement methods in src/services/auth/AuthService.ts')
    console.log('  3. Run tests: npm run dev:auth')
    console.log('  4. Make requests to test endpoints')
    console.log('')

    if (!force) {
        console.log('💾 Tip: Backups of previous versions saved in .backups/')
    }
} catch (error) {
    console.error('❌ Generation failed!')
    console.error(error.message)
    process.exit(1)
}
