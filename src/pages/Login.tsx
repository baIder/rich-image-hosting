import {useStores} from '../stores';
import {observer} from 'mobx-react';
import {useRef} from 'react';


const Login = () => {
  const {AuthStore} = useStores();

  const inputRef = useRef<HTMLInputElement>(null);

  const bindChange = () => {
    console.log(inputRef.current!.value);
    AuthStore.setUsername(inputRef.current!.value);
    console.log(AuthStore.values.username);
  };
  return (
    <>
      <h1>Login:{AuthStore.values.username}</h1>
      <input onChange={bindChange} ref={inputRef}/>
    </>
  );
};

export default observer(Login);