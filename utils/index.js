import { useCallback } from 'react';
import { useRouter } from 'next/router';

export const helper = (state = {}, send) => {
  const router = useRouter();
  const fetchData = useCallback(() => {
    router.push({
      pathname: '/search',
      query: state.context.filter,
    });
  }, [state.context.filter]);

  const changeHandler = (e, filter) => {
    send({
      type: `ADD_${filter.toUpperCase()}`,
      [filter]: e.target.value,
    });
    fetchData();
  };
  return {
    changeHandler,
    fetchData,
  };
};
