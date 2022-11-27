/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  image: string,
  email: string,
  name: string,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  image?: ModelStringInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  image: string,
  email: string,
  name: string,
  posts?: ModelPostConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  content: string,
  image?: string | null,
  userID: string,
  user?: User | null,
  likes?: ModelLikeConnection | null,
  createdAt: string,
  updatedAt: string,
  userPostsId?: string | null,
  groupUserPostsId?: string | null,
  postUserId?: string | null,
};

export type ModelLikeConnection = {
  __typename: "ModelLikeConnection",
  items:  Array<Like | null >,
  nextToken?: string | null,
};

export type Like = {
  __typename: "Like",
  id: string,
  userID: string,
  postID: string,
  user: User,
  post: Post,
  createdAt: string,
  updatedAt: string,
  postLikesId?: string | null,
  groupPostLikesId?: string | null,
  likeUserId: string,
  likePostId: string,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  image?: string | null,
  email?: string | null,
  name?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  content: string,
  image?: string | null,
  userID: string,
  userPostsId?: string | null,
  groupUserPostsId?: string | null,
  postUserId?: string | null,
};

export type ModelPostConditionInput = {
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
  userPostsId?: ModelIDInput | null,
  groupUserPostsId?: ModelIDInput | null,
  postUserId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePostInput = {
  id: string,
  content?: string | null,
  image?: string | null,
  userID?: string | null,
  userPostsId?: string | null,
  groupUserPostsId?: string | null,
  postUserId?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateLikeInput = {
  id?: string | null,
  userID: string,
  postID: string,
  postLikesId?: string | null,
  groupPostLikesId?: string | null,
  likeUserId: string,
  likePostId: string,
};

export type ModelLikeConditionInput = {
  userID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelLikeConditionInput | null > | null,
  or?: Array< ModelLikeConditionInput | null > | null,
  not?: ModelLikeConditionInput | null,
  postLikesId?: ModelIDInput | null,
  groupPostLikesId?: ModelIDInput | null,
  likeUserId?: ModelIDInput | null,
  likePostId?: ModelIDInput | null,
};

export type UpdateLikeInput = {
  id: string,
  userID?: string | null,
  postID?: string | null,
  postLikesId?: string | null,
  groupPostLikesId?: string | null,
  likeUserId: string,
  likePostId: string,
};

export type DeleteLikeInput = {
  id: string,
};

export type CreateGroupUserInput = {
  id?: string | null,
  username: string,
  image: string,
  email: string,
  name: string,
};

export type ModelGroupUserConditionInput = {
  username?: ModelStringInput | null,
  image?: ModelStringInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelGroupUserConditionInput | null > | null,
  or?: Array< ModelGroupUserConditionInput | null > | null,
  not?: ModelGroupUserConditionInput | null,
};

export type GroupUser = {
  __typename: "GroupUser",
  id: string,
  username: string,
  image: string,
  email: string,
  name: string,
  posts?: ModelPostConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGroupUserInput = {
  id: string,
  username?: string | null,
  image?: string | null,
  email?: string | null,
  name?: string | null,
};

export type DeleteGroupUserInput = {
  id: string,
};

export type CreateGroupPostInput = {
  id?: string | null,
  content: string,
  image?: string | null,
  userID: string,
  groupPostUserId?: string | null,
};

export type ModelGroupPostConditionInput = {
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelGroupPostConditionInput | null > | null,
  or?: Array< ModelGroupPostConditionInput | null > | null,
  not?: ModelGroupPostConditionInput | null,
  groupPostUserId?: ModelIDInput | null,
};

export type GroupPost = {
  __typename: "GroupPost",
  id: string,
  content: string,
  image?: string | null,
  userID: string,
  user?: User | null,
  likes?: ModelLikeConnection | null,
  createdAt: string,
  updatedAt: string,
  groupPostUserId?: string | null,
};

export type UpdateGroupPostInput = {
  id: string,
  content?: string | null,
  image?: string | null,
  userID?: string | null,
  groupPostUserId?: string | null,
};

export type DeleteGroupPostInput = {
  id: string,
};

export type CreateGroupLikeInput = {
  id?: string | null,
  userID: string,
  postID: string,
  groupLikeUserId: string,
  groupLikePostId: string,
};

export type ModelGroupLikeConditionInput = {
  userID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelGroupLikeConditionInput | null > | null,
  or?: Array< ModelGroupLikeConditionInput | null > | null,
  not?: ModelGroupLikeConditionInput | null,
  groupLikeUserId?: ModelIDInput | null,
  groupLikePostId?: ModelIDInput | null,
};

export type GroupLike = {
  __typename: "GroupLike",
  id: string,
  userID: string,
  postID: string,
  user: User,
  post: Post,
  createdAt: string,
  updatedAt: string,
  groupLikeUserId: string,
  groupLikePostId: string,
};

export type UpdateGroupLikeInput = {
  id: string,
  userID?: string | null,
  postID?: string | null,
  groupLikeUserId: string,
  groupLikePostId: string,
};

export type DeleteGroupLikeInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  image?: ModelStringInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
  userPostsId?: ModelIDInput | null,
  groupUserPostsId?: ModelIDInput | null,
  postUserId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelGroupUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  image?: ModelStringInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelGroupUserFilterInput | null > | null,
  or?: Array< ModelGroupUserFilterInput | null > | null,
  not?: ModelGroupUserFilterInput | null,
};

export type ModelGroupUserConnection = {
  __typename: "ModelGroupUserConnection",
  items:  Array<GroupUser | null >,
  nextToken?: string | null,
};

export type ModelGroupPostFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelGroupPostFilterInput | null > | null,
  or?: Array< ModelGroupPostFilterInput | null > | null,
  not?: ModelGroupPostFilterInput | null,
  groupPostUserId?: ModelIDInput | null,
};

export type ModelGroupPostConnection = {
  __typename: "ModelGroupPostConnection",
  items:  Array<GroupPost | null >,
  nextToken?: string | null,
};

export type ModelLikeFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelLikeFilterInput | null > | null,
  or?: Array< ModelLikeFilterInput | null > | null,
  not?: ModelLikeFilterInput | null,
  postLikesId?: ModelIDInput | null,
  groupPostLikesId?: ModelIDInput | null,
  likeUserId?: ModelIDInput | null,
  likePostId?: ModelIDInput | null,
};

export type ModelGroupLikeFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelGroupLikeFilterInput | null > | null,
  or?: Array< ModelGroupLikeFilterInput | null > | null,
  not?: ModelGroupLikeFilterInput | null,
  groupLikeUserId?: ModelIDInput | null,
  groupLikePostId?: ModelIDInput | null,
};

export type ModelGroupLikeConnection = {
  __typename: "ModelGroupLikeConnection",
  items:  Array<GroupLike | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
};

export type ModelSubscriptionLikeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  postID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionLikeFilterInput | null > | null,
  or?: Array< ModelSubscriptionLikeFilterInput | null > | null,
};

export type ModelSubscriptionGroupUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGroupUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionGroupUserFilterInput | null > | null,
};

export type ModelSubscriptionGroupPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionGroupPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionGroupPostFilterInput | null > | null,
};

export type ModelSubscriptionGroupLikeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  postID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionGroupLikeFilterInput | null > | null,
  or?: Array< ModelSubscriptionGroupLikeFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    image: string,
    email: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        groupUserPostsId?: string | null,
        postUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    image: string,
    email: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        groupUserPostsId?: string | null,
        postUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    image: string,
    email: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        groupUserPostsId?: string | null,
        postUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        postLikesId?: string | null,
        groupPostLikesId?: string | null,
        likeUserId: string,
        likePostId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPostsId?: string | null,
    groupUserPostsId?: string | null,
    postUserId?: string | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        postLikesId?: string | null,
        groupPostLikesId?: string | null,
        likeUserId: string,
        likePostId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPostsId?: string | null,
    groupUserPostsId?: string | null,
    postUserId?: string | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        postLikesId?: string | null,
        groupPostLikesId?: string | null,
        likeUserId: string,
        likePostId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPostsId?: string | null,
    groupUserPostsId?: string | null,
    postUserId?: string | null,
  } | null,
};

export type CreateLikeMutationVariables = {
  input: CreateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type CreateLikeMutation = {
  createLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    postID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        image: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userPostsId?: string | null,
      groupUserPostsId?: string | null,
      postUserId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    postLikesId?: string | null,
    groupPostLikesId?: string | null,
    likeUserId: string,
    likePostId: string,
  } | null,
};

export type UpdateLikeMutationVariables = {
  input: UpdateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type UpdateLikeMutation = {
  updateLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    postID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        image: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userPostsId?: string | null,
      groupUserPostsId?: string | null,
      postUserId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    postLikesId?: string | null,
    groupPostLikesId?: string | null,
    likeUserId: string,
    likePostId: string,
  } | null,
};

export type DeleteLikeMutationVariables = {
  input: DeleteLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type DeleteLikeMutation = {
  deleteLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    postID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        image: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userPostsId?: string | null,
      groupUserPostsId?: string | null,
      postUserId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    postLikesId?: string | null,
    groupPostLikesId?: string | null,
    likeUserId: string,
    likePostId: string,
  } | null,
};

export type CreateGroupUserMutationVariables = {
  input: CreateGroupUserInput,
  condition?: ModelGroupUserConditionInput | null,
};

export type CreateGroupUserMutation = {
  createGroupUser?:  {
    __typename: "GroupUser",
    id: string,
    username: string,
    image: string,
    email: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        groupUserPostsId?: string | null,
        postUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGroupUserMutationVariables = {
  input: UpdateGroupUserInput,
  condition?: ModelGroupUserConditionInput | null,
};

export type UpdateGroupUserMutation = {
  updateGroupUser?:  {
    __typename: "GroupUser",
    id: string,
    username: string,
    image: string,
    email: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        groupUserPostsId?: string | null,
        postUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGroupUserMutationVariables = {
  input: DeleteGroupUserInput,
  condition?: ModelGroupUserConditionInput | null,
};

export type DeleteGroupUserMutation = {
  deleteGroupUser?:  {
    __typename: "GroupUser",
    id: string,
    username: string,
    image: string,
    email: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        groupUserPostsId?: string | null,
        postUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGroupPostMutationVariables = {
  input: CreateGroupPostInput,
  condition?: ModelGroupPostConditionInput | null,
};

export type CreateGroupPostMutation = {
  createGroupPost?:  {
    __typename: "GroupPost",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        postLikesId?: string | null,
        groupPostLikesId?: string | null,
        likeUserId: string,
        likePostId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    groupPostUserId?: string | null,
  } | null,
};

export type UpdateGroupPostMutationVariables = {
  input: UpdateGroupPostInput,
  condition?: ModelGroupPostConditionInput | null,
};

export type UpdateGroupPostMutation = {
  updateGroupPost?:  {
    __typename: "GroupPost",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        postLikesId?: string | null,
        groupPostLikesId?: string | null,
        likeUserId: string,
        likePostId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    groupPostUserId?: string | null,
  } | null,
};

export type DeleteGroupPostMutationVariables = {
  input: DeleteGroupPostInput,
  condition?: ModelGroupPostConditionInput | null,
};

export type DeleteGroupPostMutation = {
  deleteGroupPost?:  {
    __typename: "GroupPost",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        postLikesId?: string | null,
        groupPostLikesId?: string | null,
        likeUserId: string,
        likePostId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    groupPostUserId?: string | null,
  } | null,
};

export type CreateGroupLikeMutationVariables = {
  input: CreateGroupLikeInput,
  condition?: ModelGroupLikeConditionInput | null,
};

export type CreateGroupLikeMutation = {
  createGroupLike?:  {
    __typename: "GroupLike",
    id: string,
    userID: string,
    postID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        image: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userPostsId?: string | null,
      groupUserPostsId?: string | null,
      postUserId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    groupLikeUserId: string,
    groupLikePostId: string,
  } | null,
};

export type UpdateGroupLikeMutationVariables = {
  input: UpdateGroupLikeInput,
  condition?: ModelGroupLikeConditionInput | null,
};

export type UpdateGroupLikeMutation = {
  updateGroupLike?:  {
    __typename: "GroupLike",
    id: string,
    userID: string,
    postID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        image: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userPostsId?: string | null,
      groupUserPostsId?: string | null,
      postUserId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    groupLikeUserId: string,
    groupLikePostId: string,
  } | null,
};

export type DeleteGroupLikeMutationVariables = {
  input: DeleteGroupLikeInput,
  condition?: ModelGroupLikeConditionInput | null,
};

export type DeleteGroupLikeMutation = {
  deleteGroupLike?:  {
    __typename: "GroupLike",
    id: string,
    userID: string,
    postID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        image: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userPostsId?: string | null,
      groupUserPostsId?: string | null,
      postUserId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    groupLikeUserId: string,
    groupLikePostId: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    image: string,
    email: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        groupUserPostsId?: string | null,
        postUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        postLikesId?: string | null,
        groupPostLikesId?: string | null,
        likeUserId: string,
        likePostId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPostsId?: string | null,
    groupUserPostsId?: string | null,
    postUserId?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  id?: string | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        image: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userPostsId?: string | null,
      groupUserPostsId?: string | null,
      postUserId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGroupUserQueryVariables = {
  id: string,
};

export type GetGroupUserQuery = {
  getGroupUser?:  {
    __typename: "GroupUser",
    id: string,
    username: string,
    image: string,
    email: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        groupUserPostsId?: string | null,
        postUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGroupUsersQueryVariables = {
  filter?: ModelGroupUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupUsersQuery = {
  listGroupUsers?:  {
    __typename: "ModelGroupUserConnection",
    items:  Array< {
      __typename: "GroupUser",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGroupPostQueryVariables = {
  id: string,
};

export type GetGroupPostQuery = {
  getGroupPost?:  {
    __typename: "GroupPost",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        postLikesId?: string | null,
        groupPostLikesId?: string | null,
        likeUserId: string,
        likePostId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    groupPostUserId?: string | null,
  } | null,
};

export type ListGroupPostsQueryVariables = {
  id?: string | null,
  filter?: ModelGroupPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListGroupPostsQuery = {
  listGroupPosts?:  {
    __typename: "ModelGroupPostConnection",
    items:  Array< {
      __typename: "GroupPost",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        image: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      groupPostUserId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostsByContentQueryVariables = {
  content: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsByContentQuery = {
  postsByContent?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        image: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userPostsId?: string | null,
      groupUserPostsId?: string | null,
      postUserId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type LikesByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LikesByUserIDQuery = {
  likesByUserID?:  {
    __typename: "ModelLikeConnection",
    items:  Array< {
      __typename: "Like",
      id: string,
      userID: string,
      postID: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        image: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      post:  {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        groupUserPostsId?: string | null,
        postUserId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      postLikesId?: string | null,
      groupPostLikesId?: string | null,
      likeUserId: string,
      likePostId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type LikesByPostIDQueryVariables = {
  postID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LikesByPostIDQuery = {
  likesByPostID?:  {
    __typename: "ModelLikeConnection",
    items:  Array< {
      __typename: "Like",
      id: string,
      userID: string,
      postID: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        image: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      post:  {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        groupUserPostsId?: string | null,
        postUserId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      postLikesId?: string | null,
      groupPostLikesId?: string | null,
      likeUserId: string,
      likePostId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GroupPostsByContentQueryVariables = {
  content: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GroupPostsByContentQuery = {
  groupPostsByContent?:  {
    __typename: "ModelGroupPostConnection",
    items:  Array< {
      __typename: "GroupPost",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        image: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      groupPostUserId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GroupLikesByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GroupLikesByUserIDQuery = {
  groupLikesByUserID?:  {
    __typename: "ModelGroupLikeConnection",
    items:  Array< {
      __typename: "GroupLike",
      id: string,
      userID: string,
      postID: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        image: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      post:  {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        groupUserPostsId?: string | null,
        postUserId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      groupLikeUserId: string,
      groupLikePostId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GroupLikesByPostIDQueryVariables = {
  postID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GroupLikesByPostIDQuery = {
  groupLikesByPostID?:  {
    __typename: "ModelGroupLikeConnection",
    items:  Array< {
      __typename: "GroupLike",
      id: string,
      userID: string,
      postID: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        image: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      post:  {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        groupUserPostsId?: string | null,
        postUserId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      groupLikeUserId: string,
      groupLikePostId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    image: string,
    email: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        groupUserPostsId?: string | null,
        postUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    image: string,
    email: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        groupUserPostsId?: string | null,
        postUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    image: string,
    email: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        groupUserPostsId?: string | null,
        postUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        postLikesId?: string | null,
        groupPostLikesId?: string | null,
        likeUserId: string,
        likePostId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPostsId?: string | null,
    groupUserPostsId?: string | null,
    postUserId?: string | null,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        postLikesId?: string | null,
        groupPostLikesId?: string | null,
        likeUserId: string,
        likePostId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPostsId?: string | null,
    groupUserPostsId?: string | null,
    postUserId?: string | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        postLikesId?: string | null,
        groupPostLikesId?: string | null,
        likeUserId: string,
        likePostId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPostsId?: string | null,
    groupUserPostsId?: string | null,
    postUserId?: string | null,
  } | null,
};

export type OnCreateLikeSubscriptionVariables = {
  filter?: ModelSubscriptionLikeFilterInput | null,
};

export type OnCreateLikeSubscription = {
  onCreateLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    postID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        image: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userPostsId?: string | null,
      groupUserPostsId?: string | null,
      postUserId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    postLikesId?: string | null,
    groupPostLikesId?: string | null,
    likeUserId: string,
    likePostId: string,
  } | null,
};

export type OnUpdateLikeSubscriptionVariables = {
  filter?: ModelSubscriptionLikeFilterInput | null,
};

export type OnUpdateLikeSubscription = {
  onUpdateLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    postID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        image: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userPostsId?: string | null,
      groupUserPostsId?: string | null,
      postUserId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    postLikesId?: string | null,
    groupPostLikesId?: string | null,
    likeUserId: string,
    likePostId: string,
  } | null,
};

export type OnDeleteLikeSubscriptionVariables = {
  filter?: ModelSubscriptionLikeFilterInput | null,
};

export type OnDeleteLikeSubscription = {
  onDeleteLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    postID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        image: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userPostsId?: string | null,
      groupUserPostsId?: string | null,
      postUserId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    postLikesId?: string | null,
    groupPostLikesId?: string | null,
    likeUserId: string,
    likePostId: string,
  } | null,
};

export type OnCreateGroupUserSubscriptionVariables = {
  filter?: ModelSubscriptionGroupUserFilterInput | null,
};

export type OnCreateGroupUserSubscription = {
  onCreateGroupUser?:  {
    __typename: "GroupUser",
    id: string,
    username: string,
    image: string,
    email: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        groupUserPostsId?: string | null,
        postUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGroupUserSubscriptionVariables = {
  filter?: ModelSubscriptionGroupUserFilterInput | null,
};

export type OnUpdateGroupUserSubscription = {
  onUpdateGroupUser?:  {
    __typename: "GroupUser",
    id: string,
    username: string,
    image: string,
    email: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        groupUserPostsId?: string | null,
        postUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGroupUserSubscriptionVariables = {
  filter?: ModelSubscriptionGroupUserFilterInput | null,
};

export type OnDeleteGroupUserSubscription = {
  onDeleteGroupUser?:  {
    __typename: "GroupUser",
    id: string,
    username: string,
    image: string,
    email: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        groupUserPostsId?: string | null,
        postUserId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGroupPostSubscriptionVariables = {
  filter?: ModelSubscriptionGroupPostFilterInput | null,
};

export type OnCreateGroupPostSubscription = {
  onCreateGroupPost?:  {
    __typename: "GroupPost",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        postLikesId?: string | null,
        groupPostLikesId?: string | null,
        likeUserId: string,
        likePostId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    groupPostUserId?: string | null,
  } | null,
};

export type OnUpdateGroupPostSubscriptionVariables = {
  filter?: ModelSubscriptionGroupPostFilterInput | null,
};

export type OnUpdateGroupPostSubscription = {
  onUpdateGroupPost?:  {
    __typename: "GroupPost",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        postLikesId?: string | null,
        groupPostLikesId?: string | null,
        likeUserId: string,
        likePostId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    groupPostUserId?: string | null,
  } | null,
};

export type OnDeleteGroupPostSubscriptionVariables = {
  filter?: ModelSubscriptionGroupPostFilterInput | null,
};

export type OnDeleteGroupPostSubscription = {
  onDeleteGroupPost?:  {
    __typename: "GroupPost",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        postLikesId?: string | null,
        groupPostLikesId?: string | null,
        likeUserId: string,
        likePostId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    groupPostUserId?: string | null,
  } | null,
};

export type OnCreateGroupLikeSubscriptionVariables = {
  filter?: ModelSubscriptionGroupLikeFilterInput | null,
};

export type OnCreateGroupLikeSubscription = {
  onCreateGroupLike?:  {
    __typename: "GroupLike",
    id: string,
    userID: string,
    postID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        image: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userPostsId?: string | null,
      groupUserPostsId?: string | null,
      postUserId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    groupLikeUserId: string,
    groupLikePostId: string,
  } | null,
};

export type OnUpdateGroupLikeSubscriptionVariables = {
  filter?: ModelSubscriptionGroupLikeFilterInput | null,
};

export type OnUpdateGroupLikeSubscription = {
  onUpdateGroupLike?:  {
    __typename: "GroupLike",
    id: string,
    userID: string,
    postID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        image: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userPostsId?: string | null,
      groupUserPostsId?: string | null,
      postUserId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    groupLikeUserId: string,
    groupLikePostId: string,
  } | null,
};

export type OnDeleteGroupLikeSubscriptionVariables = {
  filter?: ModelSubscriptionGroupLikeFilterInput | null,
};

export type OnDeleteGroupLikeSubscription = {
  onDeleteGroupLike?:  {
    __typename: "GroupLike",
    id: string,
    userID: string,
    postID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        image: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userPostsId?: string | null,
      groupUserPostsId?: string | null,
      postUserId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    groupLikeUserId: string,
    groupLikePostId: string,
  } | null,
};
