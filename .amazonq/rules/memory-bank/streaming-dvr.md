# Streaming and DVR Architecture

## Stream Types and Protocols
- **Live Streams**: Real-time video from cameras
- **DVR Streams**: Archived video playback
- **On-Demand**: Streams activated by client requests
- **Static Streams**: Always-running streams

## Supported Protocols
- RTSP/RTSPS (primary camera input)
- RTMP/RTMPS (streaming input/output)
- WebRTC (low-latency streaming)
- HLS/DASH (adaptive streaming)
- MPEG-TS (transport streams)

## DVR Configuration
```json
{
  "enabled": "boolean",
  "depth": "integer (days)",
  "space": "integer (GB limit)", 
  "ranges": "array of time ranges",
  "bytes": "integer (current size)",
  "duration": "integer (total recorded seconds)"
}
```

## Media Information
- **Flow Types**: file, stream, dvr_file, dvr_stream
- **Track Structure**: video, audio, text, metadata, application
- **Codecs**: H.264, HEVC, AAC, MJPEG, AV1
- **Quality Settings**: resolution, fps, bitrate, GOP size

## Stream Statistics
```json
{
  "status": "running|waiting|error",
  "alive": "boolean (< 12s delay)",
  "bitrate": "integer (kbps)",
  "online_clients": "integer",
  "ts_delay": "number (ticks)",
  "last_dts_at": "utc_ms timestamp"
}
```

## Playback Features
- Temporary playback tokens for security
- Multi-quality adaptive streaming
- DVR range queries and navigation
- Thumbnail generation
- Live stream switching and failover