import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import KakaoIcon from '../assets/KakaoLogin.png';
import GoogleIcon from '../assets/GoogleLogin.png';
import FacebookIcon from '../assets/FacebookLogin.png';
import AppleIcon from '../assets/AppleLogin.png';
import { kakaoLogin } from '@src/common/api/memberApi';

export default function SignUpModal() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // 간단한 이메일 유효성 검사
    setIsValid(/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email));
  }, [email]);

  const handleKakaoLogin = async () => {
    // 실제로는 카카오 인가 코드를 받아와야 하지만, 예시로 prompt로 입력받음
    const code = prompt('카카오 인가 코드를 입력하세요:');
    if (!code) return;
    try {
      const result = await kakaoLogin(code);
      alert(`로그인 성공! 환영합니다, ${result.name}님`);
      // TODO: 로그인 상태 처리 및 토큰 저장 등
    } catch (err: any) {
      alert('로그인 실패: ' + (err?.response?.data?.message || err.message));
    }
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
            onChange={e => setEmail(e.target.value)}
            $isValid={isValid}
          />
        </InputWrapper>
        <LoginButton type="button" disabled={!isValid} $isValid={isValid}>로그인</LoginButton>
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
  box-shadow: 0 4px 32px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 8px;
  justify-content: center;
`;

const Title = styled.h2`
  color: #17696A;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 32px;
`;

const InputWrapper = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.div`
  color: #17696A;
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
  transition: background 0.2s, color 0.2s;
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
  background: #E0E0E0;
`;

const DividerText = styled.span`
  color: #BDBDBD;
  font-size: 16px;
  margin: 0 16px;
`;

const SocialButton = styled.button<{ color: string; fontColor?: string; border?: string }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 0;
  background: ${({ color }) => color};
  color: ${({ fontColor }) => fontColor || '#222'};
  border: ${({ border }) => border ? `1.5px solid ${border}` : 'none'};
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
  color: #BDBDBD;
  text-align: center;
  font-size: 16px;
  margin-top: 16px;
  cursor: pointer;
`;