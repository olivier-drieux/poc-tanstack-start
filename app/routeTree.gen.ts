/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as UsersIndexImport } from './routes/users/index'
import { Route as UsersUserIdImport } from './routes/users/$userId'
import { Route as AuthSignInImport } from './routes/auth/sign-in'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const UsersIndexRoute = UsersIndexImport.update({
  id: '/users/',
  path: '/users/',
  getParentRoute: () => rootRoute,
} as any)

const UsersUserIdRoute = UsersUserIdImport.update({
  id: '/users/$userId',
  path: '/users/$userId',
  getParentRoute: () => rootRoute,
} as any)

const AuthSignInRoute = AuthSignInImport.update({
  id: '/auth/sign-in',
  path: '/auth/sign-in',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/auth/sign-in': {
      id: '/auth/sign-in'
      path: '/auth/sign-in'
      fullPath: '/auth/sign-in'
      preLoaderRoute: typeof AuthSignInImport
      parentRoute: typeof rootRoute
    }
    '/users/$userId': {
      id: '/users/$userId'
      path: '/users/$userId'
      fullPath: '/users/$userId'
      preLoaderRoute: typeof UsersUserIdImport
      parentRoute: typeof rootRoute
    }
    '/users/': {
      id: '/users/'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof UsersIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/auth/sign-in': typeof AuthSignInRoute
  '/users/$userId': typeof UsersUserIdRoute
  '/users': typeof UsersIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/auth/sign-in': typeof AuthSignInRoute
  '/users/$userId': typeof UsersUserIdRoute
  '/users': typeof UsersIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/auth/sign-in': typeof AuthSignInRoute
  '/users/$userId': typeof UsersUserIdRoute
  '/users/': typeof UsersIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/auth/sign-in' | '/users/$userId' | '/users'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/auth/sign-in' | '/users/$userId' | '/users'
  id: '__root__' | '/' | '/auth/sign-in' | '/users/$userId' | '/users/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthSignInRoute: typeof AuthSignInRoute
  UsersUserIdRoute: typeof UsersUserIdRoute
  UsersIndexRoute: typeof UsersIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthSignInRoute: AuthSignInRoute,
  UsersUserIdRoute: UsersUserIdRoute,
  UsersIndexRoute: UsersIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/auth/sign-in",
        "/users/$userId",
        "/users/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/auth/sign-in": {
      "filePath": "auth/sign-in.tsx"
    },
    "/users/$userId": {
      "filePath": "users/$userId.tsx"
    },
    "/users/": {
      "filePath": "users/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
