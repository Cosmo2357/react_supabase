import { useContext } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { ExampleContext } from '../context'
import { Link } from "react-router-dom";
import axios from 'axios';
import {
  useQuery,
} from '@tanstack/react-query'

export default function About() {

  type Inputs = {
    example: string;
    exampleRequired: string;
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log('onSubmit:', data);
  console.log('watch:', watch('example')); // watchは引数に渡した名前の入力値を監視する
  console.log('exampleRequired:', watch('exampleRequired'));


  const { data, isSuccess, isLoading, error } = useQuery({
    queryKey: ['example'],
    queryFn: () => axios(`${import.meta.env.VITE_API_BASE_URL}/api/v1/example`).then(res => res.data),
    staleTime: 300000, // 5 分間
    onError: (error) => {
      console.log(error)
    }
  })

  const { counter, incrementCounter } = useContext(ExampleContext);

  const onClickHandler = () => incrementCounter()

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error
  return (
    <div>
      <h1>from context: {counter}</h1>
      <div>{isSuccess && data.map((item: any, index: number) => {
        return (
          <div key={index}>
            <h1>{item.name}</h1>
            <p>{item.email}</p>

          </div>
        )
      })

      }
      </div>
      <button onClick={onClickHandler} className={`bg-black h-8 w-20 rounded text-white`}>Click</button>
      <Link to="/">Home</Link>
      <div >
        <form className="flex p-2 flex-col" onSubmit={handleSubmit(onSubmit)}>
          <input className="border p-2 my-2 rounded" defaultValue="test" {...register('example')} />
          <input className="border p-2  my-2 rounded " {...register('exampleRequired', { required: true })} />
          {errors.exampleRequired && (
            <span style={{ color: 'red' }}>This field is required</span>
          )}
          <button className="btn bg-white my-2  h-11 py-1 px-4 rounded border" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
