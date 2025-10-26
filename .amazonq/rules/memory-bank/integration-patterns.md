# Integration Patterns and Best Practices

## API Design Principles
- **Cursor-based Pagination**: Base64 encoded offsets for large collections
- **Resource Relationships**: Hierarchical organization > folder > stream structure
- **Consistent Error Handling**: Structured error responses with codes and sources
- **Temporal Data**: UTC milliseconds for all timestamps

## Common Integration Scenarios

### Camera Management Integration
1. Agent activation with tokens
2. Automatic stream discovery and configuration
3. Preset application for standardized settings
4. Firmware update management

### Analytics Integration
1. Real-time episode streaming via webhooks
2. Person database synchronization
3. Custom episode type creation
4. Search and filtering by analytics results

### User Management Integration
1. Organization-based multi-tenancy
2. SSO integration via API keys
3. Permission inheritance and delegation
4. Bulk user operations

## Response Patterns
```json
{
  "collection_response": {
    "estimated_count": "integer",
    "next": "cursor string", 
    "prev": "cursor string",
    "timing": "performance object",
    "items": "array of resources"
  }
}
```

## Error Handling
```json
{
  "errors": [{
    "id": "unique error identifier",
    "status": "HTTP status code",
    "code": "application error code",
    "title": "human readable summary",
    "source": {
      "pointer": "JSON path to error",
      "parameter": "query parameter name"
    }
  }]
}
```

## Performance Considerations
- Use cursor pagination for large datasets
- Implement proper caching for media info
- Batch operations where possible
- Monitor stream statistics for health checks