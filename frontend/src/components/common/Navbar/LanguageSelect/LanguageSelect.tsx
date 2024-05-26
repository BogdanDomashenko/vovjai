import { FC, useRef, useState } from 'react';
import { useLanguages } from '../../../../common/api';
import { useLocalization } from '../../../../common/hooks';
import { Button } from '../../../ui';
import { useClickOutside } from '../../../../common/hooks/useClickOutside';

export const LanguageSelect: FC = () => {
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
      <div className='absolute left-0 top-12 z-10 w-full' ref={listRef}>
        {isListOpen &&
          data
            ?.filter((item) => item.code !== language)
            .map((item) => (
              <Button
                className='w-full uppercase'
                onClick={() => {
                  setLanguage(item.code);
                  setIsListOpen(false);
                }}
              >
                {item.code}
              </Button>
            ))}
      </div>
    </div>
  );
};
