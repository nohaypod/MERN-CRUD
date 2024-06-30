import {useForm} from 'react-hook-form';
import { registerRequest } from '../../api/auth';

function RegisterPage() {
    const { register , handleSubmit } = useForm();

    const onSubmit = handleSubmit( async (values) => {
        //console.log(values);
        const res = await registerRequest(values)
        console.log(res)
    })

    return (
        <div className="bg-zinc-800 max-w-md p-10 rounded-md"> 
            <form onSubmit={ onSubmit }
            >
                <input type="text" 
                    {...register("username", { requiered: true})}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder='user'
                />
                <input type="email" {...register("email", { required: true})} 
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder='email'
                />
                <input type="password" {...register("password", { required: true })} 
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder='password'
                />

                <button type="submit" className="w-full py-2 bg-green-600 text-white font-semibold rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"> Registro</button>
            </form>
            
        </div>
    )
}

export default RegisterPage