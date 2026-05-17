/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  icon: string;
  image: string;
  features?: string[];
}

export interface CallbackRequest {
  id: string;
  name: string;
  phone: string;
  service: string;
  location: string;
  timestamp: string;
  status: 'new' | 'in-progress' | 'completed';
  image?: string;
}

export type Language = 'en' | 'ar';
