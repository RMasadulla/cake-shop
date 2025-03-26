import { postModel } from "@/models/post";
import { replaceMongoIdInArray } from "@/utils/data-util";

export async function getAllPost(params) {
  const posts = await postModel.find().lean();

  return replaceMongoIdInArray(posts);
}
