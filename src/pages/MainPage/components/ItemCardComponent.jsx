import { CircleButton, CircleImage } from "../../../components";
import {
  ButtonSection,
  ButtonWrapper,
  FlexBox,
  ImageLink,
  MainImage,
  NicknameText,
  ProfileContent,
  ProfileImage,
  SmallText,
  StyledGrid,
} from "./style";

export const ItemCardComponent = ({
  nickname,
  profileImage,
  contentImage,
  id,
  createdAt,
}) => {
  return (
    <StyledGrid>
      <FlexBox>
        {profileImage ? (
          <ProfileImage src={profileImage} />
        ) : (
          <CircleImage type="profile" size="40px" />
        )}
        <ProfileContent>
          <NicknameText>{nickname}</NicknameText>
          <SmallText>Posted on {createdAt.slice(0, 10)}</SmallText>
        </ProfileContent>
      </FlexBox>
      <ImageLink to={`/house/${id}`}>
        <MainImage src={contentImage} />
      </ImageLink>
      <ButtonSection>
        <ButtonWrapper>
          <CircleButton
            icon="Heart"
            bgColor="transparent"
            isShadow={false}
            color="#424242"
          />
          <p style={{ marginLeft: "-4px" }}>{Math.floor(Math.random() * 99)}</p>
        </ButtonWrapper>
        <ButtonWrapper>
          <CircleButton
            icon="Bookmark"
            bgColor="transparent"
            isShadow={false}
            color="#424242"
          />
          <p style={{ marginLeft: "-4px" }}>{Math.floor(Math.random() * 20)}</p>
        </ButtonWrapper>
        <ButtonWrapper>
          <CircleButton
            icon="Bubble"
            bgColor="transparent"
            isShadow={false}
            color="#424242"
          />
          <p style={{ marginLeft: "-4px" }}>{Math.floor(Math.random() * 40)}</p>
        </ButtonWrapper>
      </ButtonSection>
    </StyledGrid>
  );
};
