/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      image
      email
      name
      posts {
        items {
          id
          content
          image
          userID
          createdAt
          updatedAt
          userPostsId
          groupUserPostsId
          postUserId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        image
        email
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      content
      image
      userID
      user {
        id
        username
        image
        email
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
          postLikesId
          groupPostLikesId
          likeUserId
          likePostId
        }
        nextToken
      }
      createdAt
      updatedAt
      userPostsId
      groupUserPostsId
      postUserId
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $id: ID
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPosts(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        content
        image
        userID
        user {
          id
          username
          image
          email
          name
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
        groupUserPostsId
        postUserId
      }
      nextToken
    }
  }
`;
export const getGroupUser = /* GraphQL */ `
  query GetGroupUser($id: ID!) {
    getGroupUser(id: $id) {
      id
      username
      image
      email
      name
      posts {
        items {
          id
          content
          image
          userID
          createdAt
          updatedAt
          userPostsId
          groupUserPostsId
          postUserId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listGroupUsers = /* GraphQL */ `
  query ListGroupUsers(
    $filter: ModelGroupUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        image
        email
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGroupPost = /* GraphQL */ `
  query GetGroupPost($id: ID!) {
    getGroupPost(id: $id) {
      id
      content
      image
      userID
      user {
        id
        username
        image
        email
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
          postLikesId
          groupPostLikesId
          likeUserId
          likePostId
        }
        nextToken
      }
      createdAt
      updatedAt
      groupPostUserId
    }
  }
`;
export const listGroupPosts = /* GraphQL */ `
  query ListGroupPosts(
    $id: ID
    $filter: ModelGroupPostFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listGroupPosts(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        content
        image
        userID
        user {
          id
          username
          image
          email
          name
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        groupPostUserId
      }
      nextToken
    }
  }
`;
export const postsByContent = /* GraphQL */ `
  query PostsByContent(
    $content: String!
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByContent(
      content: $content
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        image
        userID
        user {
          id
          username
          image
          email
          name
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
        groupUserPostsId
        postUserId
      }
      nextToken
    }
  }
`;
export const likesByUserID = /* GraphQL */ `
  query LikesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        postID
        user {
          id
          username
          image
          email
          name
          createdAt
          updatedAt
        }
        post {
          id
          content
          image
          userID
          createdAt
          updatedAt
          userPostsId
          groupUserPostsId
          postUserId
        }
        createdAt
        updatedAt
        postLikesId
        groupPostLikesId
        likeUserId
        likePostId
      }
      nextToken
    }
  }
`;
export const likesByPostID = /* GraphQL */ `
  query LikesByPostID(
    $postID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likesByPostID(
      postID: $postID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        postID
        user {
          id
          username
          image
          email
          name
          createdAt
          updatedAt
        }
        post {
          id
          content
          image
          userID
          createdAt
          updatedAt
          userPostsId
          groupUserPostsId
          postUserId
        }
        createdAt
        updatedAt
        postLikesId
        groupPostLikesId
        likeUserId
        likePostId
      }
      nextToken
    }
  }
`;
export const groupPostsByContent = /* GraphQL */ `
  query GroupPostsByContent(
    $content: String!
    $sortDirection: ModelSortDirection
    $filter: ModelGroupPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    groupPostsByContent(
      content: $content
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        image
        userID
        user {
          id
          username
          image
          email
          name
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        groupPostUserId
      }
      nextToken
    }
  }
`;
export const groupLikesByUserID = /* GraphQL */ `
  query GroupLikesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGroupLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    groupLikesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        postID
        user {
          id
          username
          image
          email
          name
          createdAt
          updatedAt
        }
        post {
          id
          content
          image
          userID
          createdAt
          updatedAt
          userPostsId
          groupUserPostsId
          postUserId
        }
        createdAt
        updatedAt
        groupLikeUserId
        groupLikePostId
      }
      nextToken
    }
  }
`;
export const groupLikesByPostID = /* GraphQL */ `
  query GroupLikesByPostID(
    $postID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGroupLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    groupLikesByPostID(
      postID: $postID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        postID
        user {
          id
          username
          image
          email
          name
          createdAt
          updatedAt
        }
        post {
          id
          content
          image
          userID
          createdAt
          updatedAt
          userPostsId
          groupUserPostsId
          postUserId
        }
        createdAt
        updatedAt
        groupLikeUserId
        groupLikePostId
      }
      nextToken
    }
  }
`;
