import { Field, Int, ObjectType } from '@nestjs/graphql';
import { TitleStyle } from '@prisma/client';

@ObjectType({ description: '제목 스타일' })
export class TitleStyleEntity implements TitleStyle {
  @Field(() => Int, { description: 'ID' })
  id: number;

  @Field({ description: '마진', nullable: true })
  margin: string | null;

  @Field({ description: '모바일 마진', nullable: true })
  mobileMargin: string | null;

  @Field(() => Int, { description: '텍스트 크기', nullable: true })
  size: number | null;

  @Field(() => Int, { description: '모바일 텍스트 크기', nullable: true })
  mobileSize: number | null;

  @Field(() => Int, { description: '줄 높이', nullable: true })
  lineHeight: number;

  @Field(() => Int, { description: '모바일 줄 높이', nullable: true })
  mobileLineHeight: number | null;

  @Field({ description: '텍스트 색상', nullable: true })
  color: string | null;

  @Field({ description: '컴포넌트 ID' })
  componentId: number;
}
