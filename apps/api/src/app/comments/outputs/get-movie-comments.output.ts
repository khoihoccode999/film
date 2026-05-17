import { Field, ObjectType } from '@nestjs/graphql';
import { CommentType } from '../comment.type';

@ObjectType()
export class GetCommentsOutput {
    @Field(() => [CommentType])
    data: CommentType[];

    @Field(() => Number)
    total: number;

    @Field(() => Number)
    count: number;

    @Field(() => Boolean)
    hasMore: boolean;

    @Field(() => Number)
    currentPage: number;
}
