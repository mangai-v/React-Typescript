
import { VariantProps, cva} from "class-variance-authority";

const button = cva('base-button',{
    variants:{
        size:{
            small:'p-2 text-sm',
            medium:'p-3 text-md', 
            large:'p-4 text-lg'
        },
        color:{
            primary:'bg-blue-500 text-white',
            secondary:'bg-gray-500 text-white',
        }
    },
    defaultVariants:{
        size:'large',
        color:'secondary'
    }
})
export type ButtonVariantProps = VariantProps<typeof button>
export default button