/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike($filter: ModelSubscriptionLikeFilterInput) {
    onCreateLike(filter: $filter) {
      id
      userID
      postID
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
      post {
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
      createdAt
      updatedAt
      postLikesId
      groupPostLikesId
      likeUserId
      likePostId
    }
  }
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike($filter: ModelSubscriptionLikeFilterInput) {
    onUpdateLike(filter: $filter) {
      id
      userID
      postID
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
      post {
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
      createdAt
      updatedAt
      postLikesId
      groupPostLikesId
      likeUserId
      likePostId
    }
  }
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike($filter: ModelSubscriptionLikeFilterInput) {
    onDeleteLike(filter: $filter) {
      id
      userID
      postID
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
      post {
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
      createdAt
      updatedAt
      postLikesId
      groupPostLikesId
      likeUserId
      likePostId
    }
  }
`;
export const onCreateGroupUser = /* GraphQL */ `
  subscription OnCreateGroupUser(
    $filter: ModelSubscriptionGroupUserFilterInput
  ) {
    onCreateGroupUser(filter: $filter) {
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
export const onUpdateGroupUser = /* GraphQL */ `
  subscription OnUpdateGroupUser(
    $filter: ModelSubscriptionGroupUserFilterInput
  ) {
    onUpdateGroupUser(filter: $filter) {
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
export const onDeleteGroupUser = /* GraphQL */ `
  subscription OnDeleteGroupUser(
    $filter: ModelSubscriptionGroupUserFilterInput
  ) {
    onDeleteGroupUser(filter: $filter) {
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
export const onCreateGroupPost = /* GraphQL */ `
  subscription OnCreateGroupPost(
    $filter: ModelSubscriptionGroupPostFilterInput
  ) {
    onCreateGroupPost(filter: $filter) {
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
export const onUpdateGroupPost = /* GraphQL */ `
  subscription OnUpdateGroupPost(
    $filter: ModelSubscriptionGroupPostFilterInput
  ) {
    onUpdateGroupPost(filter: $filter) {
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
export const onDeleteGroupPost = /* GraphQL */ `
  subscription OnDeleteGroupPost(
    $filter: ModelSubscriptionGroupPostFilterInput
  ) {
    onDeleteGroupPost(filter: $filter) {
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
export const onCreateGroupLike = /* GraphQL */ `
  subscription OnCreateGroupLike(
    $filter: ModelSubscriptionGroupLikeFilterInput
  ) {
    onCreateGroupLike(filter: $filter) {
      id
      userID
      postID
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
      post {
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
      createdAt
      updatedAt
      groupLikeUserId
      groupLikePostId
    }
  }
`;
export const onUpdateGroupLike = /* GraphQL */ `
  subscription OnUpdateGroupLike(
    $filter: ModelSubscriptionGroupLikeFilterInput
  ) {
    onUpdateGroupLike(filter: $filter) {
      id
      userID
      postID
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
      post {
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
      createdAt
      updatedAt
      groupLikeUserId
      groupLikePostId
    }
  }
`;
export const onDeleteGroupLike = /* GraphQL */ `
  subscription OnDeleteGroupLike(
    $filter: ModelSubscriptionGroupLikeFilterInput
  ) {
    onDeleteGroupLike(filter: $filter) {
      id
      userID
      postID
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
      post {
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
      createdAt
      updatedAt
      groupLikeUserId
      groupLikePostId
    }
  }
`;
