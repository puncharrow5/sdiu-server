import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BackgroundType, ComponentMobileStyle } from '@prisma/client';

@ObjectType({ description: '컴포넌트 모바일 스타일' })
export class ComponentMobileStyleEntity implements ComponentMobileStyle {
  @Field(() => Int, { description: 'ID' })
  id: number;

  @Field({ description: '높이', nullable: true })
  height: string | null;

  @Field({ description: '패딩', nullable: true })
  padding: string | null;

  @Field({ description: '갭', nullable: true })
  gap: string | null;

  @Field({ description: '배경', nullable: true })
  background: string | null;

  @Field(() => BackgroundType, { description: '배경 종류', nullable: true })
  backgroundType: BackgroundType | null;

  @Field(() => Int, { description: '컴포넌트 ID' })
  componentId: number;
}
