import React, { useState } from 'react';
import type { NextPage } from 'next';

import styles from '@styles/Home.module.css';
import { useAuthContext } from 'hooks';

const Home: NextPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { signIn } = useAuthContext();

  const onFormSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    await signIn({ email, password });

    //
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={onFormSubmit} className={styles.formWrapper}>
        <input
          type="email"
          name="email"
          placeholder="e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Home;
