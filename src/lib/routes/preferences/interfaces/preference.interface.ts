import {
  RelationshipTypeEnum
} from "@/lib/routes/preferences/interfaces/relationship-type.enum";
import { Interest } from "@/lib/routes/preferences/interfaces/interface";

export interface Preference {
  id: number;
  min_age?: number;
  max_age?: number;
  gender_preference?: number;
  max_distance?: number;
  relationship_type?: RelationshipTypeEnum;
  user_id: string;
  interests?: Interest[];
}
