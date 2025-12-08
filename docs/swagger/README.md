# Concord OpenAPI/Swagger Documentation

This directory contains OpenAPI 3.0 specifications for the Concord Server APIs.

## API Documentation Files

### concord-server-api.yaml
The main Concord Server API documentation covering:
- Server status and maintenance operations
- Process management (v1 and v2)
- Organization management
- Project and repository management
- Secret management
- User and team management
- Role and API key management
- Agent management
- Trigger and policy management
- Inventory and JSON store operations
- Process forms and events
- External and GitHub event handling
- Audit logging

### concord-ansible-api.yaml
Ansible Plugin API documentation covering:
- Playbook listing and details
- Play and task information
- Host execution status
- Ansible event retrieval

### concord-noderoster-api.yaml
Node Roster Plugin API documentation covering:
- Host management and querying
- Artifact deployment tracking
- Ansible facts retrieval
- Process history for hosts

## Usage

These OpenAPI specifications can be used with:
- Swagger UI for interactive API exploration
- OpenAPI code generators for client SDK generation
- API documentation tools like Redoc
- API testing tools like Postman

## Authentication

All APIs support two authentication methods:
1. **API Key Authentication**: Pass the API key in the `Authorization` header
2. **Session Token**: Use cookie-based session authentication via `JSESSIONID`

## Base URL

All API paths are relative to the server base URL. The default API prefix is `/api`.

## Version

These specifications are for Concord Server version 2.32.1.
