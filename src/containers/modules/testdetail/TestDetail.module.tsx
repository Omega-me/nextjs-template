'use client';

import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';

const TestDetailModule = () => {
  const params = useParams();
  useEffect(() => {
    console.log(params);
  }, [params]);
  return <div>TestDetail.module============================</div>;
};

export default TestDetailModule;
