import { FiUpload } from "react-icons/fi";
import { Container } from "../../../components/container";
import { DashboardHeader } from "../../../components/panelHeader";
import { useForm } from 'react-hook-form'
import { Input } from '../../../components/input'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().nonempty("O nome é obrigatório."),
  model: z.string().nonempty("O modelo é obrigatório."),
  year: z.string().nonempty("O ano do carro é obrigatório."),
  km: z.string().nonempty("O KM do carro é obrigatório."),
  price: z.string().nonempty("O preço é obrigatório."),
  city: z.string().nonempty("A cidade é obrigatória."),
  whatsapp: z.string().min(1, 'Telefone é obrigatório').refine((value) => /^(\d{11,12})$/.test(value), { message: "Número de telefone inválido." }),
  description: z.string().nonempty("A descrição é obrigatória")
})

type FormData = z.infer<typeof schema>;

export function New() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange"
  })

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <Container>
      <DashboardHeader />

      <div className="w-full bg-white p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2">

        <button className="border-2 w-48 rounded-lg flex items-center justify-center cursor-pointer border-gray-600 h-32 md:w-48">
          <div className="absolute cursor-pointer">
            <FiUpload size={30} color="#000" />
          </div>
          <div className="cursor-pointer">
            <input type="file" accept="image/*" className="opacity-0 cursor-pointer" />
          </div>
        </button>
      </div>

      <div className="w-full bg-white p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2 mt-2">
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-3">
            <p className="mb-2 font-medium">Nome do carro</p>
            <Input
              type="text"
              register={register}
              name="name"
              error={errors.name?.message}
              placeholder="EX: Onix 1.0..." />
          </div>

          <div className="mb-3">
            <p className="mb-2 font-medium">Modelo do carro</p>
            <Input
              type="text"
              register={register}
              name="model" //tem que ser o que esta no formData
              error={errors.model?.message}
              placeholder="1.0 flex plus manual" />
          </div>

          <div className="w-full mb-3 flex flex-row items-center gap-4">
            <div className="w-full">
              <p className="mb-2 font-medium">Ano do carro</p>
              <Input
                type="text"
                register={register}
                name="year" //tem que ser o que esta no formData
                error={errors.year?.message}
                placeholder="2016/2017" />
            </div>

            <div className="w-full">
              <p className="mb-2 font-medium">Ano do carro</p>
              <Input
                type="text"
                register={register}
                name="km" //tem que ser o que esta no formData
                error={errors.km?.message}
                placeholder="50.000" />
            </div>
          </div>

          <div className="w-full mb-3 flex flex-row items-center gap-4">
            <div className="w-full">
              <p className="mb-2 font-medium">Telefone/whatsapp</p>
              <Input
                type="text"
                register={register}
                name="whatsapp" //tem que ser o que esta no formData
                error={errors.whatsapp?.message}
                placeholder="EX: (031) 98460-3714" />
            </div>

            <div className="w-full">
              <p className="mb-2 font-medium">Cidade</p>
              <Input
                type="text"
                register={register}
                name="city" //tem que ser o que esta no formData
                error={errors.city?.message}
                placeholder="EX: Belo Horizonte" />
            </div>
          </div>

          <div className="mb-3">
            <p className="mb-2 font-medium">Preço</p>
            <Input
              type="text"
              register={register}
              name="price" //tem que ser o que esta no formData
              error={errors.price?.message}
              placeholder="EX: 69.000" />
          </div>

          <div className="mb-3">
            <p className="mb-2 font-medium">Descrição</p>
            <textarea
              className="border-2 w-full rounded-md h-24 px-2"
              {...register("description")}
              name="description"
              id="description"
              placeholder="Digite a descrição completa sobre o carro..."
            />
            {errors.description && <p className="mb-1 text-red-500">{errors.description.message}</p>}
          </div>

          <button type="submit" className="cursor-pointer rounded-md bg-zinc-900 text-white font-medium w-full h-10"> Cadastrar </button>


        </form>
      </div>
    </Container>
  )
}  