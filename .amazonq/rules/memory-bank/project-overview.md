# Watcher VMS Client API - Project Overview

## Project Description
This is a client API for Watcher VMS (Video Management System) designed for accessing content including cameras, mosaics, episodes, reports, etc. The access is subject to user permissions requiring login and password for request execution.

## Key Purpose
- Develop custom UI for subscribers using Watcher
- Integration with external systems needing content access
- Complement to Watcher Admin API for managing users, permissions, and infrastructure

## API Version
- Version: 24.11-844
- OpenAPI: 3.1.0
- Contact: support@flussonic.com

## Core Entities
- **Streams**: Video streams from cameras with DVR capabilities
- **Episodes**: Video analytics events (face detection, vehicle detection, etc.)
- **Organizations**: Multi-tenant structure for user and resource management
- **Users**: Authentication and permission management
- **Mosaics**: Multi-stream video layouts
- **Folders**: Hierarchical organization of streams
- **Presets**: Configuration templates for streams