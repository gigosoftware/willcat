# Video Analytics and Vision Features

## Supported Analytics Algorithms
- **faces**: Face detection and recognition
- **plates**: License plate recognition
- **human**: Human detection and tracking
- **context_search**: AI-powered content search
- **qr_code**: QR code detection and decoding

## Face Recognition
- Digital fingerprints for person identification
- Person database with photos and metadata
- Similarity matching with confidence scores
- Person lists for access control
- Unknown person auto-creation

## Vehicle Detection
- License plate text recognition
- Vehicle type classification (emergency, regular)
- Vehicle facing side detection (front, rear, side)
- Missing license plate detection
- Vehicle purpose categorization

## Person Management
```json
{
  "person_id": "snowflake_id",
  "name": "string",
  "external_id": "string",
  "originator": "api|identification_service",
  "photos": "array of base64 images",
  "organization": "organization_base",
  "person_list": "list assignment"
}
```

## Episode Structure
- Base64 encoded preview images
- Detection bounding boxes and metadata
- Confidence scores and matching results
- Stream association and playback tokens
- User-defined titles and descriptions

## Vision Configuration
- Algorithm selection per stream
- Confidence thresholds
- Region of interest settings
- Person list associations
- Real-time vs batch processing modes