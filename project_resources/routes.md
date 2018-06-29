# Project: LynkWall

## REST Routes

### User
Request | Response
------------ | -------------
**HOME** | index (GET)
**USER** /user/register | register (GET)
**USER** /user/register| register (POST)
**USER** user/login | login (GET)
**USER** user/login | login (POST)
**USER** user/update | profile update (GET)
**USER** user/update | profile update (POST)
**USER** user/logout | logout (POST)
**RESOURCE** /resource/all | resources (GET)
**RESOURCE** /resource/new | resources (GET)
**RESOURCE** /resource/new | resources (POST)
**RESOURCE** /resources/:userID | resource_for_user (GET)
**RESOURCE** /resource/:resourceID/category/:categoryID | resourceAddTopic (POST)
**RESOURCE**/category/:categoryID/resources |
**RESOURCE** /resources/:resourceID/rate
