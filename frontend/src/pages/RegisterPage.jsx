import {useForm} from 'react-hook-form';

function RegisterPage() {
    const { register , handleSubmit } = useForm();
    return (
        <div> 
            <form onSubmit={ handleSubmit((values) => {
                console.log(values);
            })}
            >
                <input type="text" 
                    {...register("username", { requiered: true})}
                />
                <input type="email" name="email" />
                <input type="password" name="password" />
                <button type="submit"> Registro</button>
            </form>
        </div>
    )
}

export default RegisterPage