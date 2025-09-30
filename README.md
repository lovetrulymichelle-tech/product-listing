# Product Listing API

A simple, deployable REST API for product listings built with Node.js and Express.

## Features

- RESTful API for product management
- Product filtering by category and price range
- Health check endpoint for monitoring
- Docker containerization
- CI/CD pipeline with GitHub Actions

## API Endpoints

- `GET /` - API information and available endpoints
- `GET /health` - Health check endpoint
- `GET /api/products` - List all products (supports filtering)
- `GET /api/products/:id` - Get specific product by ID

### Query Parameters for `/api/products`

- `category` - Filter by product category
- `minPrice` - Filter by minimum price
- `maxPrice` - Filter by maximum price

## Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start the server
npm start

# The API will be available at http://localhost:3000
```

### Docker Deployment

```bash
# Build the Docker image
docker build -t product-listing .

# Run the container
docker run -p 3000:3000 product-listing

# Or run in detached mode
docker run -d -p 3000:3000 --name product-listing-app product-listing
```

### Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (default: production)

Copy `.env.example` to `.env` and customize as needed.

## Deploy Ready Features

✅ **Application Structure**: Complete Node.js/Express application
✅ **Containerization**: Docker support with optimized Alpine Linux image  
✅ **Health Checks**: Built-in health monitoring endpoint
✅ **Security**: Non-root user, minimal dependencies
✅ **CI/CD**: GitHub Actions workflow for testing and building
✅ **Documentation**: Complete setup and deployment instructions
✅ **Error Handling**: Proper error responses and logging
✅ **Production Ready**: Environment configuration support

## Testing

```bash
# Test the health endpoint
curl http://localhost:3000/health

# Test the products API
curl http://localhost:3000/api/products

# Test filtering
curl "http://localhost:3000/api/products?category=Electronics&maxPrice=200"
```

## Deployment Options

This application is ready to deploy to:

- **Docker**: Use the included Dockerfile
- **Cloud Platforms**: Deploy to AWS ECS, Google Cloud Run, Azure Container Instances
- **Container Platforms**: Kubernetes, Docker Swarm
- **Platform-as-a-Service**: Heroku, Railway, Render
- **Vercel**: Configured with custom domain support

### Deploy to Vercel

This application is configured to deploy to Vercel with the custom domain `hustlebaddie.net`.

#### Prerequisites
- Install [Vercel CLI](https://vercel.com/docs/cli): `npm i -g vercel`
- Have a Vercel account

#### Deployment Steps

1. **Deploy to Vercel:**
   ```bash
   vercel
   ```

2. **Add Custom Domain:**
   - Go to your project settings in Vercel dashboard
   - Navigate to "Domains" section
   - Add `hustlebaddie.net` and `www.hustlebaddie.net`
   - Configure DNS records as instructed by Vercel:
     - Add an `A` record pointing to Vercel's IP: `76.76.21.21`
     - Or add a `CNAME` record pointing to `cname.vercel-dns.com`
   
3. **Verify Deployment:**
   - Visit `https://hustlebaddie.net/health` to check API status
   - Visit `https://hustlebaddie.net/api/products` to test the products endpoint

The `vercel.json` configuration file is set up to route all requests to the Express app. Custom domains should be configured in the Vercel dashboard after deployment.

## License

MIT