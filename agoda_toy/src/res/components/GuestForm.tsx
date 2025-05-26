import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  width: 100%;
  max-width: 680px; // Slightly adjusted
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  background-color: #fff;
  border: 1px solid #EAEAEA; // Lighter border
  border-radius: 20px; // Slightly smaller radius
  padding: 24px 32px; // Adjusted padding
  margin-bottom: 20px; // Adjusted margin
  box-shadow: none; // Removed box-shadow for a flatter look as in image
`;

const SectionTitle = styled.h2`
  font-size: 18px; // Adjusted size
  font-weight: bold;
  color: #1A1A1A; // Darker color
  margin-top: 0;
  margin-bottom: 24px; // Increased bottom margin
  display: flex;
  align-items: center;
`;

const RequiredAsterisk = styled.span`
  color: #FF6651;
  margin-left: 2px; // Reduced margin
  font-weight: bold; // Make asterisk bold
`;

const FormRow = styled.div`
  display: flex;
  margin-bottom: 16px;
  gap: 16px;
`;

const FormGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 0; // Removed default bottom margin, will control with FormRow or inline style
`;

const Label = styled.label`
  font-size: 13px; // Adjusted size
  color: #4F4F4F; // Adjusted color
  margin-bottom: 8px; // Increased margin
`;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = styled.input<InputProps>`
  padding: 10px 12px;
  border: 1px solid ${({ error }) => (error ? '#FF6651' : '#D6DADE')}; // Lighter border, red if error
  border-radius: 6px;
  font-size: 14px;
  background-color: #fff; // Light background for input
  color: #1A1A1A;
  &::placeholder {
    color: #828282; // Placeholder color
  }
  &:focus {
    border-color:#3D8587
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 124, 238, 0.15);
    background-color: #fff; // White background on focus
  }
`;

const Select = styled.select`
  padding: 10px 12px;
  border: 1px solid #D6DADE;
  border-radius: 4px;
  font-size: 14px;
  background-color: #F7F9FA;
  color: #1A1A1A;
  &:focus {
    border-color: #3D8587
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 124, 238, 0.15);
    background-color: #fff;
  }
`;

const Textarea = styled.textarea`
  padding: 10px 12px;
  border: 1px solid #D6DADE;
  border-radius: 8px; // Increased for more rounded corners
  font-size: 14px;
  min-height: 90px; // Adjusted height
  resize: none; // Disable resizing
  overflow-y: auto; // Ensure vertical scrolling on overflow
  background-color: #fff; // Light background for input
  color: #1A1A1A;
  width: 100%; 
  &::placeholder {
    color: #828282;
  }
  &:focus {
    border-color:#3D8587
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 124, 238, 0.15);
    background-color: #fff;
  }
`;

const CheckboxGroup = styled.div`
  margin-bottom: 10px; // Increased margin
  &:last-child {
    margin-bottom: 0;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #4F4F4F;
  cursor: pointer;
  line-height: 1.5;
`;

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 10px; // Increased margin
  width: 18px; // Slightly larger
  height: 18px;
  accent-color: #3D8587
`;

const TermsSection = styled(Section)`
  background-color: #F7F9FA; // Light grey background for this inner section
  padding: 16px; // Adjusted padding
  margin-top: 12px; // Add some space above this section
`;

const SubmitButton = styled.button`
  background-color: #B0B8C1; 
  color: white;
  font-size: 15px; // Adjusted size
  font-weight: bold;
  padding: 14px 20px; // Adjusted padding
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  margin-top: 24px; // Increased margin
  &:hover {
    background-color: #929BA6;
  }
  &:disabled {
    background-color: #D6DADE;
    color: #828282;
    cursor: not-allowed;
  }
`;

const PageTitle = styled.h1`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 24px;
    color: #3D8587;
    align-self: flex-start; 
`;

const ErrorText = styled.span`
  font-size: 12px;
  color: #FF6651;
  margin-top: 4px;
`;

const GuestForm = () => {
  const [lastName, setLastName] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const [firstNameError, setFirstNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);

  const validateFirstName = (value) => /^[a-zA-Z]+$/.test(value);
  const validateEmail = (value) => /^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(value);

  return (
    <FormContainer>
        <PageTitle>1. 투숙객 정보</PageTitle>
      <Section>
        <SectionTitle>
            필수 입력 정보 
            <span style={{fontSize: '12px', color: '#828282', fontWeight: 'normal', marginLeft: 'auto'}}>
                 * 표시는 필수 정보입니다.
            </span>
        </SectionTitle>
        <FormGroup style={{ marginBottom: '16px'}}>
            <Label htmlFor="lastName">성 <RequiredAsterisk>*</RequiredAsterisk></Label>
            <Input
              type="text"
              id="lastName"
              placeholder="영문으로 작성해 주세요"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </FormGroup>
          <FormGroup style={{ marginBottom: '16px'}}>
            <Label htmlFor="firstName" style={{ color: firstNameError ? '#FF6651' : undefined }}>
              이름 <RequiredAsterisk>*</RequiredAsterisk>
            </Label>
            <Input
              type="text"
              id="firstName"
              placeholder="영문으로 작성해 주세요"
              value={firstName}
              onChange={e => {
                setFirstName(e.target.value);
                setFirstNameError(!validateFirstName(e.target.value));
              }}
              error={firstNameError}
            />
            {firstNameError && (
              <ErrorText>영문 알파벳 대문자(A-Z) 또는 소문자(a-z)만을 사용해 입력해 주세요</ErrorText>
            )}
          </FormGroup>
        <FormGroup style={{ marginBottom: '16px'}}>
          <Label htmlFor="email" style={{ color: emailError ? '#FF6651' : undefined }}>
            이메일 <RequiredAsterisk>*</RequiredAsterisk>
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="username@domain.com"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
              setEmailError(!validateEmail(e.target.value));
            }}
            error={emailError}
          />
          {emailError && (
            <ErrorText>이메일 주소를 정확히 입력해 주세요</ErrorText>
          )}
        </FormGroup>
        <FormGroup  style={{ marginBottom: '16px'}}>
          <Label htmlFor="country">거주 국가/지역<RequiredAsterisk>*</RequiredAsterisk></Label>
          <Select id="country">
            <option value="KR">대한민국</option>
            {/* TODO: Add more countries */}
          </Select>
        </FormGroup>
        <FormRow>
          <FormGroup style={{ flex: '0 0 100px' }}> {/* Adjusted width */}
            <Label htmlFor="countryCode">국가 코드<RequiredAsterisk>*</RequiredAsterisk></Label>
            <Select id="countryCode">
              <option value="+82">+82 대한민국</option> {/* Added country name */}
              {/* TODO: Add more country codes */}
            </Select>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="phoneNumber">전화번호<RequiredAsterisk>*</RequiredAsterisk></Label>
            <Input type="tel" id="phoneNumber" placeholder="입력해 주세요" defaultValue="010-1234-5678" />
          </FormGroup>
        </FormRow>
      </Section>

      <Section>
        <SectionTitle>별도 요청 <span style={{color: '#828282', fontWeight: 'normal'}}>(선택)</span></SectionTitle>
        <p style={{fontSize: '13px', color: '#4F4F4F', marginTop: '-15px', marginBottom: '15px', lineHeight: '1.6'}}>
숙소는 최선을 다해 요청 사항을 제공해 드릴 수 있도록 최선을 다하겠습니다.<br />
다만, 사정에 따라 제공 여부가 보장되지 않을 수 있습니다.
</p>
        <Textarea placeholder="여기에 요청 사항을 입력하세요 (선택)" />
      </Section>

      <Section>
        <SectionTitle>이용 약관</SectionTitle>
        <CheckboxGroup>
          <CheckboxLabel>
            <CheckboxInput name="agreeAll" />
            <strong>전체 동의</strong>
          </CheckboxLabel>
        </CheckboxGroup>
        <TermsSection> {/* Inner section with different background */}
          <CheckboxGroup>
            <CheckboxLabel>
              <CheckboxInput name="agePolicy" />
              18세 이상 및 이용약관 동의 (필수)
            </CheckboxLabel>
          </CheckboxGroup>
          <CheckboxGroup>
            <CheckboxLabel>
              <CheckboxInput name="thirdPartyPolicy" />
              개인정보 제3자 제공동의 (필수)
            </CheckboxLabel>
          </CheckboxGroup>
        </TermsSection>
      </Section>
      
      <SubmitButton>다음 단계</SubmitButton>
    </FormContainer>
  );
};

export default GuestForm; 