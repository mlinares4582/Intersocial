/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
export const createGroupUser = /* GraphQL */ `
  mutation CreateGroupUser(
    $input: CreateGroupUserInput!
    $condition: ModelGroupUserConditionInput
  ) {
    createGroupUser(input: $input, condition: $condition) {
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
export const updateGroupUser = /* GraphQL */ `
  mutation UpdateGroupUser(
    $input: UpdateGroupUserInput!
    $condition: ModelGroupUserConditionInput
  ) {
    updateGroupUser(input: $input, condition: $condition) {
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
export const deleteGroupUser = /* GraphQL */ `
  mutation DeleteGroupUser(
    $input: DeleteGroupUserInput!
    $condition: ModelGroupUserConditionInput
  ) {
    deleteGroupUser(input: $input, condition: $condition) {
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
export const createGroupPost = /* GraphQL */ `
  mutation CreateGroupPost(
    $input: CreateGroupPostInput!
    $condition: ModelGroupPostConditionInput
  ) {
    createGroupPost(input: $input, condition: $condition) {
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
export const updateGroupPost = /* GraphQL */ `
  mutation UpdateGroupPost(
    $input: UpdateGroupPostInput!
    $condition: ModelGroupPostConditionInput
  ) {
    updateGroupPost(input: $input, condition: $condition) {
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
export const deleteGroupPost = /* GraphQL */ `
  mutation DeleteGroupPost(
    $input: DeleteGroupPostInput!
    $condition: ModelGroupPostConditionInput
  ) {
    deleteGroupPost(input: $input, condition: $condition) {
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
export const createGroupLike = /* GraphQL */ `
  mutation CreateGroupLike(
    $input: CreateGroupLikeInput!
    $condition: ModelGroupLikeConditionInput
  ) {
    createGroupLike(input: $input, condition: $condition) {
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
export const updateGroupLike = /* GraphQL */ `
  mutation UpdateGroupLike(
    $input: UpdateGroupLikeInput!
    $condition: ModelGroupLikeConditionInput
  ) {
    updateGroupLike(input: $input, condition: $condition) {
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
export const deleteGroupLike = /* GraphQL */ `
  mutation DeleteGroupLike(
    $input: DeleteGroupLikeInput!
    $condition: ModelGroupLikeConditionInput
  ) {
    deleteGroupLike(input: $input, condition: $condition) {
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
