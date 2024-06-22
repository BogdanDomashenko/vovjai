import { FC, useRef, useState } from 'react';
import { useLanguages } from '../../../../common/api';
import { useLocalization } from '../../../../common/hooks';
import { Button } from '../../../ui';
import { useClickOutside } from '../../../../common/hooks/useClickOutside';

export const LanguageSelect: FC = () => {
  const navigate = useNavigate();
  const listRef = useRef(null);
  const { setLanguage, language } = useLocalization();
  const { data } = useLanguages();
  const [isListOpen, setIsListOpen] = useState<boolean>(false);

  useClickOutside(listRef, () => setIsListOpen(false));

  return (
    <div className='relative'>
      <Button width='md' className='uppercase' onClick={() => setIsListOpen(!isListOpen)}>
        {language}
      </Button>
      {isListOpen ? (
        <div
          className='absolute left-0 top-[53px] z-10 flex w-full flex-col gap-1 bg-dark-950 pt-1'
          ref={listRef}
        >
          {isListOpen &&
            data
              ?.filter((item) => item.code !== language)
              .map((item) => (
                <Button
                  className='w-full uppercase'
                  onClick={() => {
                    setLanguage(item.code);
                    setIsListOpen(false);
                    window.location.href = '/';
                  }}
                >
                  {item.code}
                </Button>
              ))}
        </div>
      ) : null}
    </div>
  );
};
