# Use official Node.js runtime as base image
FROM node:18-slim

# Set working directory in container
WORKDIR /app

# Copy package.json (without package-lock.json)
COPY package.json ./

# Install dependencies (with SSL workaround for build environment)
RUN npm config set strict-ssl false && npm install --production

# Copy application code
COPY src/ ./src/

# Create non-root user for security
RUN groupadd -g 1001 nodejs && \
    useradd -m -u 1001 -g nodejs nodejs

# Change ownership of app directory
RUN chown -R nodejs:nodejs /app
USER nodejs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

# Start the application
CMD ["npm", "start"]