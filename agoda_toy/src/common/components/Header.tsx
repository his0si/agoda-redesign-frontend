import React, { useState, useRef, useEffect } from 'react';
import AgodaLogoIcon from '../../assets/img_gnb_logo.png';
import styled from 'styled-components';
import ProfileIcon from '../../assets/pro_small.svg?react';
import GlobalIcon from '../../assets/icn_gnb_lang.svg?react';
import SignUpModal from '../../main/components/SignUpModal';

const HEADER_LIST = ['교통', '숙소', '엑티비티', '프로모션'];

interface HeaderProps {
  isMainPage?: boolean;
}

export default function Header({ isMainPage }: HeaderProps) {
  // 로그인 상태 예시 (실제 서비스에서는 context/redux 등 사용 권장)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  // 메뉴 클릭 핸들러
  const handleMenuClick = (menu: string) => {
    setShowDropdown(false);
    if (!isLoggedIn && menu !== '로그인') {
      setShowLoginModal(true);
      return;
    }
    switch (menu) {
      case '마이 페이지':
        // TODO: 마이페이지로 이동
        break;
      case '위시리스트':
        // TODO: 위시리스트로 이동
        break;
      case '숙소 등록':
        // TODO: 숙소 등록 페이지로 이동
        break;
      case '여행 가이드':
        // TODO: 여행 가이드로 이동
        break;
      case 'eSIM':
        // TODO: eSIM 페이지로 이동
        break;
      case '고객센터':
        // TODO: 고객센터로 이동
        break;
      case '로그아웃':
        setIsLoggedIn(false);
        break;
      case '로그인':
        setShowLoginModal(true);
        break;
      default:
        break;
    }
  };

  // 드롭다운 메뉴 항목
  const menuItems = isLoggedIn
    ? [
        '마이 페이지',
        '위시리스트',
        '숙소 등록',
        '여행 가이드',
        'eSIM',
        '고객센터',
        '로그아웃',
      ]
    : [
        '마이 페이지',
        '위시리스트',
        '숙소 등록',
        '여행 가이드',
        'eSIM',
        '고객센터',
        '로그인',
      ];

  return (
    <HeaderContainer isMainPage={isMainPage}>
      <Frame>
        <HeaderLeft>
          <AgodaLogo />
          {HEADER_LIST.map((text) => (
            <HeaderText key={text} isMainPage={isMainPage}>{text}</HeaderText>
          ))}
        </HeaderLeft>
        <HeaderRight>
          <Global isMainPage={isMainPage} />
          <Profile
            isMainPage={isMainPage}
            style={{ cursor: 'pointer' }}
            onClick={() => setShowDropdown((prev) => !prev)}
          />
          {showDropdown && (
            <DropdownMenu ref={dropdownRef}>
              {menuItems.map((item) => (
                <DropdownItem key={item} onClick={() => handleMenuClick(item)}>
                  {item}
                </DropdownItem>
              ))}
            </DropdownMenu>
          )}
        </HeaderRight>
      </Frame>
      {showLoginModal && (
        <ModalOverlay onClick={() => setShowLoginModal(false)}>
          <ModalWrapper onClick={e => e.stopPropagation()}>
            <SignUpModal />
          </ModalWrapper>
        </ModalOverlay>
      )}
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header<HeaderProps>`
  display: flex;
  height: 4rem;
  padding: 1.0625rem 8.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
  background-color: ${({ isMainPage }) => (isMainPage ? 'rgba(255, 255, 255, 0.5)' : 'white')};

  ${({ isMainPage }) =>
    isMainPage &&
    `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000; // Ensure header stays on top
  `}
`;

const Frame = styled.div`
  display: flex;
  width: 103rem;
  justify-content: space-between;
  align-items: flex-start;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 4.875rem;
`;

const HeaderRight = styled.div`
  display: flex;
  padding: 0.125rem 0rem;
  align-items: center;
  gap: 1.5rem;
  position: relative;
`;

const AgodaLogo = styled.div`
  width: 4.60606rem;
  height: 2.375rem;
  aspect-ratio: 73.7/38;
  background: url(${AgodaLogoIcon}) center / cover no-repeat;
`;

interface HeaderTextProps {
  isMainPage?: boolean;
}

const HeaderText = styled.div<HeaderTextProps>`
  ${({ theme }) => theme.fonts.headline.sm};
  display: flex;
  height: 1.4375rem;
  flex-direction: column;
  justify-content: center;
  color: ${({ isMainPage, theme }) => (isMainPage ? 'white' : theme.colors.black)};
`;

interface IconProps {
  isMainPage?: boolean;
}

const Global = styled(GlobalIcon)<IconProps>`
  width: 1.625rem;
  height: 1.625rem;
  aspect-ratio: 1/1;
  path {
    fill: white;
  }
`;

const Profile = styled(ProfileIcon)<IconProps>`
  width: 2.3125rem;
  height: 2.3125rem;
  path {
    fill: white;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 72px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 16px rgba(0,0,0,0.04);
  border-radius: 0 0 20px 20px;
  width: 164px;
  height: 293px;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  gap: 0;
  backdrop-filter: blur(8px);
`;

const DropdownItem = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 18px;
  font-family: 'SUIT', sans-serif;
  font-weight: 400;
  text-align: center;
  width: 100%;
  cursor: pointer;
  transition: color 0.2s;
  padding: 12px 0;
  margin: 0;
  &:hover {
    color: #17696A;
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
