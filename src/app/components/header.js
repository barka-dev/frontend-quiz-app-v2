'use client'

import ThemeSwitcher from "./themeSwitcher";
import SubjectTitle from './subjectTitle';
import { Suspense } from 'react';
import Wrapper from '../wrapper';

export default function Header(){
  
  return (
    <Wrapper>
        <header>
          <Suspense fallback={<h3>Loading ...</h3>}>
            <SubjectTitle/>
          </Suspense>
          <ThemeSwitcher/>
        </header>
    </Wrapper>
  )
}