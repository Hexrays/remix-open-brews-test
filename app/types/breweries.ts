export interface Brewery {
  id: string;
  name: string;
  brewery_type: string | null;
  street: string | null;
  address_2: string | null;
  address_3: string | null;
  city: string | null;
  state: string | null;
  county_province: string | null;
  postal_code: string | null;
  country: string | null;
  longitude: string | null;
  latitude: string | null;
  phone: string | null;
  website_url: string | null;
  description: string;
  updated_at: string | null;
  created_at: string;
}
