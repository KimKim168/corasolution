import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { styled } from 'styled-components';

const ButtonSimple = ({ title, link, targetBlank }:any) => {
  
  
  return (
    <StyledWrapper>
      <Button
        asChild
        className="button w-[200px] bg-primary-two hover:bg-primary-two text-primary transition-all px-2 text-[13px] md:text-[15px] font-manrope-bold"
      >
        <a href={link} target={targetBlank}>
          <span className="label">{title}</span>
        </a>
      </Button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    gap: 8px;
    border: none;
    transition: all 0.3s ease;
  }

  .button:hover {
    transform: translateY(-2px);
  }

  .svgIcon {
    opacity: 0;
    transform: translateX(-5px);
    transition: all 0.3s ease;
  }

  .button:hover .svgIcon {
    opacity: 1;
    transform: translateX(0);
  }
`;

export default ButtonSimple;
