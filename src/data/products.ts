import strawberryCup from "@/assets/strawberry-cup.jpg";
import chocoDonut from "@/assets/choco-donut.jpg";
import redVelvet from "@/assets/red-velvet.jpg";
import miniCake from "@/assets/mini-cake.jpg";
import sweetBox from "@/assets/sweet-box.jpg";
import cupcake from "@/assets/cupcake.jpg";
import chocolates from "@/assets/chocolates.jpg";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tag?: string;
};

export const categories = [
  { id: "pasteles", emoji: "🍰", name: "Pasteles", image: redVelvet },
  { id: "cupcakes", emoji: "🧁", name: "Cupcakes", image: cupcake },
  { id: "donas", emoji: "🍩", name: "Donas", image: chocoDonut },
  { id: "postres", emoji: "🍓", name: "Postres", image: strawberryCup },
  { id: "chocolates", emoji: "🍫", name: "Chocolates", image: chocolates },
  { id: "dulces", emoji: "🍬", name: "Dulces", image: sweetBox },
  { id: "combos", emoji: "🎁", name: "Combos", image: sweetBox },
  { id: "especiales", emoji: "✨", name: "Especiales", image: miniCake },
];

export const products: Product[] = [
  {
    id: "strawberry-cup",
    name: "Strawberry Cup",
    description: "Capas de crema, fresas y dulzura.",
    price: 25,
    image: strawberryCup,
    category: "postres",
    tag: "Favorito",
  },
  {
    id: "choco-donut",
    name: "Choco Donut",
    description: "Donut suave cubierta de chocolate.",
    price: 12,
    image: chocoDonut,
    category: "donas",
  },
  {
    id: "red-velvet",
    name: "Red Velvet",
    description: "Pastel red velvet con crema suave.",
    price: 30,
    image: redVelvet,
    category: "pasteles",
    tag: "Nuevo",
  },
  {
    id: "mini-cake",
    name: "Mini Cake Puccake",
    description: "Una pequeña creación para un gran momento.",
    price: 22,
    image: miniCake,
    category: "especiales",
  },
  {
    id: "sweet-box",
    name: "Sweet Box",
    description: "Selección de nuestros dulces favoritos.",
    price: 45,
    image: sweetBox,
    category: "combos",
    tag: "Para regalar",
  },
  {
    id: "cupcake-vainilla",
    name: "Cupcake Vainilla",
    description: "Bizcocho esponjoso con buttercream y cereza.",
    price: 14,
    image: cupcake,
    category: "cupcakes",
  },
];

export const currency = (value: number) =>
  new Intl.NumberFormat("es-BO", { style: "currency", currency: "BOB", maximumFractionDigits: 0 }).format(value);
