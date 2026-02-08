export type TransportVehicleCreateRequest = 
{
  route_id: string
  vehicle_no: string
  driver_name: string
  status?: "active" | "inactive"
}
