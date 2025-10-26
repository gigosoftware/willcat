# Permissions and Security Model

## Access Levels
- **generic**: Standard user with limited permissions
- **admin**: Full system access and domain management
- **domain_admin**: Cross-organization management (read-only flag)

## Permission Hierarchy
1. **Domain Level**: System-wide administration
2. **Organization Level**: Multi-tenant boundaries
3. **Folder Level**: Stream grouping and access control
4. **Stream Level**: Individual camera permissions

## Organization Permissions
```json
{
  "can_view_stats": "boolean",
  "can_edit_streams": "boolean", 
  "can_edit_users": "boolean",
  "can_view_persons_lists": "boolean",
  "can_edit_persons_lists": "boolean",
  "can_view_streams": "boolean"
}
```

## Folder Permissions
```json
{
  "can_view": "boolean (live video access)",
  "can_view_dvr": "boolean (archive access)",
  "dvr_depth_limit": "integer (seconds, 0=unlimited)",
  "can_use_ptz": "boolean (camera control)",
  "can_use_actions": "boolean (stream actions)"
}
```

## Authentication Methods
- **JWT Tokens**: Primary authentication with refresh capability
- **API Keys**: Programmatic access for integrations
- **Session Management**: Max concurrent sessions per user
- **Password Recovery**: Email-based reset workflow

## Security Features
- Multi-organization isolation
- Granular permission inheritance
- Temporary playback tokens
- User session limits
- Audit logging for configuration changes