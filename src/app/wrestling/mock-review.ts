import { Review } from './review';
//utilisation du mock à nouveau, le node js c'est bien mais pas sur un serveur mutualisé...
export const REVIEWS: Review[] = [

	{
		id:1,
		name: "Les 4* 2018",
		date: new Date(),
		year: null,
		driveLink:"https://docs.google.com/document/d/1Kcpzcil3QecaY4JGnD8FYBt8OS-qsQfBICFQlgWj-2c/edit?usp=sharings",
		types: ["4starslist", "PWG"],
	},
	{
		id:2,
		name: "NJPW BOSJ 2018",
		date: new Date(),
		year: null,
		driveLink:"https://docs.google.com/document/d/1310NlpB9UMBDdNG_Bgd_VgP9QHCRpoM9dSynxuPDXAA/edit",
		types: ["NJPW", "BOSJ"],
	},
	{
		id:3,
		name: "NJPW 2018",
		date: new Date(),
		year: null,
		driveLink:"https://docs.google.com/document/d/1WlZ_5zcflboPzuKFzMWMruOetdFdbRRuo6S0Sy4WrAg/edit",
		types: ["NJPW"],
	},
	{
		id:4,
		name: "NJPW G1 2018",
		date: new Date(),
		year: null,
		driveLink:"https://docs.google.com/document/d/1KoZix0UoTCiLBehLlCgN12cm0-wl3q7ATjTc0ziDO8Q/edit",
		types: ["NJPW", "G1"]
	},
	{
		id:5,
		name: "IMPACT 2018",
		date: new Date(),
		year: null,
		driveLink:"https://docs.google.com/document/d/1MmrjdV7u3C889Q208JQRAs2KPhG8u1wLEkX2xGdqdZQ/edit",
		types: ["IMPACT"],
	},
	{
		id:6,
		name: "Jap 2018 : AJPW NOAH Dragon Gate DDT BJW",
		date: new Date(),
		year: null,
		driveLink:"https://docs.google.com/document/d/1RuTip2OduveqHkmTTGe-pr1sa3hbUYDhdvqDkZcfBRY/edit",
		types: ["4starslist", "AJPW", "NOAH", "Dragon Gate", "DDT", "BJW"],
	},
	{
		id:7,
		name: "PROGRESS 2018",
		date: new Date(),
		year: null,
		driveLink:"https://docs.google.com/document/d/1xyJzOJQbHiaBjcT3-Q3oOthE5gJuLkmy9dcd25yS3Do/edit",
		types: ["PROGRESS"],
	},
	{
		id:8,
		name: "ROH 2018",
		date: new Date(),
		year: null,
		driveLink:"https://docs.google.com/document/d/1uFLYDA4G-CXz-qjODfCgZ_KE5b8XmUlvI07QhVenKgs/edit",
		types: ["ROH"],
	},
	{
		id:9,
		name: "PWG 2018",
		date: new Date(),
		year: null,
		driveLink:"https://docs.google.com/document/d/1dw0jrt6UCYQcK3qkt88IC7ZCdb_2ajtr-xG0Q8CeFvI/edit",
		types: ["PWG"],
	},
	{
		id:10,
		name: "WWE NXT UK 2018",
		date: new Date(),
		year: null,
		driveLink:"https://docs.google.com/document/d/11SAq9SWSwlNvcqWVV0FsnALhHe3fw4xCe4b2YYmRAY4/edit",
		types: ["WWE"],
	},
	{
		id:11,
		name: "Indé 2018 wXw EVOLVE GCW DEFIANT IWA ALL IN",
		date: new Date(),
		year: null,
		driveLink:"https://docs.google.com/document/d/1ZjOGVs-pq62lqF-67taJqPyCG152RGPKMqJ7GFE0WXE/edit",
		types: ["4starslist", "wXw", "EVOLVE", "GCW", "DEFIANT", "IWA", "ALL IN"],
	},
	{
		id:12,
		name: "Bilan mi parcours 2018",
		date: new Date(),
		year: null,
		driveLink:"https://docs.google.com/document/d/14KMNmUIqUn0-dsLLB5EcKfumtN-S5ZPgllEBpoggG-s/edit?usp=sharing",
		types: ["4starslist"],
	},
	{
		id:12,
		name: "nulltest",
		date: new Date(),
		year: null,
		driveLink:null,
		types: ["4starslist"],
	},
]