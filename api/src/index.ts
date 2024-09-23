// This is very rough and dirty
type aircraft = {
	tailNumber: string;
	status: string;
	previousLocation: string;
	nextLocation: string;
}[];

type data = {
	airport: string;
	status: string;
	aircraft: aircraft
}

export default {
	async fetch(request): Promise<Response> {
		const data: data = {
			"airport": "",
			"status": "",
			"aircraft": [
				{
					"tailNumber": "tail-001",
					"status": "Landed",
					"previousLocation": "Benson",
					"nextLocation": "Brize norton"
				},
				{
					"tailNumber": "tail-002",
					"status": "Taxiing",
					"previousLocation": "Lossiemouth",
					"nextLocation": "Marham"
				},
				{
					"tailNumber": "tail-003",
					"status": "Maintainence",
					"previousLocation": "Akrotiri",
					"nextLocation": "Boston"
				},
				{
					"tailNumber": "tail-004",
					"status": "Flight Servicing",
					"previousLocation": "Las Vegas",
					"nextLocation": "Paris"
				},
				{
					"tailNumber": "tail-005",
					"status": "Taxiing",
					"previousLocation": "Birmingham",
					"nextLocation": "St Mawgan"
				},
				{
					"tailNumber": "tail-006",
					"status": "Flight Servicing",
					"previousLocation": "London Luton",
					"nextLocation": "Dublin"
				}
			]
		}

		return Response.json(data);
	},
} satisfies ExportedHandler;
