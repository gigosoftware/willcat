# Core Data Models

## Stream Configuration
```json
{
  "name": "string (media_name, primary key)",
  "title": "string",
  "comment": "string",
  "static": "boolean (default: true)",
  "disabled": "boolean",
  "organization_id": "integer",
  "dvr": "stream_dvr_spec",
  "vision": "vision_spec",
  "coordinates": "map_spec",
  "stats": "stream_stats (read-only)"
}
```

## Episode Types
- **Generic**: Basic motion detection
- **Face**: Face detection with recognition matching
- **Vehicle**: Vehicle and license plate detection
- **Human**: Human detection and tracking
- **Context Search**: AI-powered search results
- **QR Code**: QR code detection and decoding
- **Custom**: User-defined episode types

## User Structure
```json
{
  "id": "integer (primary key)",
  "name": "string (login)",
  "fullname": "string",
  "email": "string (email format)",
  "access_level": "generic|admin",
  "organizations": "array of organization objects",
  "permissions": "organization and folder permissions"
}
```

## Organization Model
```json
{
  "id": "integer (primary key)",
  "title": "string",
  "limits": {
    "streams": "integer (default: 5000)",
    "users": "integer (default: 2000)"
  },
  "stats": {
    "streams": "integer",
    "users": "integer",
    "mosaics": "integer"
  }
}
```

## Common Patterns
- **Timestamps**: UTC milliseconds (utc_ms format)
- **Cursors**: Base64 encoded pagination tokens
- **Permissions**: Hierarchical (organization > folder > stream)
- **Media Info**: Track-based structure for video/audio/text content