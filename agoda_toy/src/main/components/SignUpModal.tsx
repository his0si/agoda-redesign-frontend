import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import KakaoIcon from '../assets/KakaoLogin.png';
import GoogleIcon from '../assets/GoogleLogin.png';
import FacebookIcon from '../assets/FacebookLogin.png';
import AppleIcon from '../assets/AppleLogin.png';

export default function SignUpModal() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // 간단한 이메일 유효성 검사
    setIsValid(/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email));
  }, [email]);

  const handleKakaoLogin = () => {
    const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
    const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <Title>로그인 또는 회원가입</Title>
        <InputWrapper>
          <Label>이메일</Label>
          <Input
            placeholder="id@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            $isValid={isValid}
          />
        </InputWrapper>
        <LoginButton type="button" disabled={!isValid} $isValid={isValid}>
          로그인
        </LoginButton>
        <DividerWrapper>
          <Divider />
          <DividerText>또는</DividerText>
          <Divider />
        </DividerWrapper>
        <SocialButton color="#FEE500" onClick={handleKakaoLogin}>
          <Icon src={KakaoIcon} alt="kakao" />
          카카오 계정으로 로그인
        </SocialButton>
        <SocialButton color="#fff" border="#E0E0E0">
          <Icon src={GoogleIcon} alt="google" />
          구글 계정으로 로그인
        </SocialButton>
        <SocialButton color="#1877F3" fontColor="#fff">
          <Icon src={FacebookIcon} alt="facebook" />
          페이스북 계정으로 로그인
        </SocialButton>
        <SocialButton color="#000" fontColor="#fff">
          <Icon src={AppleIcon} alt="apple" />
          애플 계정으로 로그인
        </SocialButton>
        <SignUpText>회원가입</SignUpText>
      </ModalContainer>
    </ModalOverlay>
  );
}

// styled-components
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 50px;
  width: 629px;
  height: 760px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 8px;
  justify-content: center;
`;

const Title = styled.h2`
  color: #17696a;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 32px;
`;

const InputWrapper = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.div`
  color: #17696a;
  font-size: 16px;
  margin-bottom: 4px;
`;

const Input = styled.input<{ $isValid: boolean }>`
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  padding: 16px 0;
  border: 1.5px solid ${({ $isValid }) => ($isValid ? '#17696A' : '#17696A')};
  border-radius: 8px;
  font-size: 20px;
  outline: none;
  text-align: left;
  padding-left: 8px;
  &::placeholder {
    text-align: left;
    color: #bdbdbd;
    padding-left: 8px;
  }
`;

const LoginButton = styled.button<{ $isValid: boolean }>`
  width: 100%;
  padding: 16px 0;
  background: ${({ $isValid }) => ($isValid ? '#17696A' : '#F5F6F7')};
  color: ${({ $isValid }) => ($isValid ? '#fff' : '#BDBDBD')};
  font-size: 20px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  margin-bottom: 24px;
  cursor: ${({ $isValid }) => ($isValid ? 'pointer' : 'not-allowed')};
  transition:
    background 0.2s,
    color 0.2s;
  box-sizing: border-box;
`;

const DividerWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const Divider = styled.div`
  flex: 1;
  height: 1px;
  background: #e0e0e0;
`;

const DividerText = styled.span`
  color: #bdbdbd;
  font-size: 16px;
  margin: 0 16px;
`;

const SocialButton = styled.button<{
  color: string;
  fontColor?: string;
  border?: string;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 0;
  background: ${({ color }) => color};
  color: ${({ fontColor }) => fontColor || '#222'};
  border: ${({ border }) => (border ? `1.5px solid ${border}` : 'none')};
  border-radius: 8px;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
  cursor: pointer;
  position: relative;
  justify-content: center;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 16px;
`;

const SignUpText = styled.div`
  color: #bdbdbd;
  text-align: center;
  font-size: 16px;
  margin-top: 16px;
  cursor: pointer;
`;
