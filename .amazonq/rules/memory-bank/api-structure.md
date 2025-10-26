# API Structure and Endpoints

## Authentication
- JWT-based authentication with access_token and refresh_token
- Password recovery and reset functionality
- API key support for programmatic access

## Main Resource Categories

### Streams Management
- GET/POST/PUT/DELETE `/streams` - Stream CRUD operations
- Stream statistics, DVR info, media quality settings
- Camera configuration (sensor settings, ONVIF, PTZ)
- Firmware updates and agent activation

### Episodes (Video Analytics)
- GET `/episodes` - Retrieve analytics events
- Episode types: face, vehicle, human, generic, context_search, qr_code, custom
- Face recognition with person matching
- Vehicle detection with license plate recognition

### User Management
- GET/POST/PUT/DELETE `/users` - User CRUD operations
- Profile management, permissions, organizations
- Push notifications and web push subscriptions
- Message system for user communication

### Organizations
- Multi-tenant structure
- User permissions per organization
- Stream and folder access control
- Invite system with keys

### Folders
- Hierarchical organization of streams
- Floor plans and coordinate mapping
- User permissions inheritance

### Mosaics
- Multi-stream video layouts (1x7, 2x2, 3x3, up to 8x8)
- Stream arrangement and playback tokens

### Presets
- Configuration templates for streams
- DVR and vision analytics settings
- Adjustable vs fixed presets