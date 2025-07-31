import type { Icon } from "lucide-react";
import { HeartPulse, Stethoscope, Brain, Bone, Baby, Users, Eye, Ear, Shield, GitCommitVertical, Droplets, FlaskConical, CircleUser, Wind, StethoscopeIcon, Microscope, Footprints, Hand, Scale, Smile, Activity, Heart, EyeOff, Grape, PersonStanding, Spline, Syringe, Ambulance, BrainCircuit, HeartCrack, Leaf, Speech, CircleDot, Dna, Bot } from "lucide-react";

export interface Specialization {
  name: string;
  slug: string;
  description: string;
  icon: Icon;
}

const Tooth: Icon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 13a2.5 2.5 0 0 0 5 0V7a2 2 0 0 0-4 0v1" />
    <path d="M9.5 7a2.5 2.5 0 0 1 5 0v6a2.5 2.5 0 0 1-5 0Z" />
    <path d="M7 17a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3a2.5 2.5 0 0 0-5 0 2.5 2.5 0 0 1-5 0v3Z" />
  </svg>
);


export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  experience: number;
  expertise: string[];
  availability: Record<string, string[]>;
  bio: string;
  reviews: string;
  imageUrl: string;
}

export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    category: 'medicine' | 'cosmetic' | 'wellness' | 'baby-care';
}

export const specializations: Specialization[] = [
  { name: 'Cardiology', slug: 'cardiology', description: 'Heart and blood vessel specialists.', icon: HeartPulse },
  { name: 'Dermatology', slug: 'dermatology', description: 'Skin, hair, and nail experts.', icon: Stethoscope },
  { name: 'Neurology', slug: 'neurology', description: 'Nervous system disorder specialists.', icon: Brain },
  { name: 'Orthopedics', slug: 'orthopedics', description: 'Musculoskeletal system experts.', icon: Bone },
  { name: 'Pediatrics', slug: 'pediatrics', description: 'Child health care specialists.', icon: Baby },
  { name: 'Psychiatry', slug: 'psychiatry', description: 'Mental health and disorder experts.', icon: Users },
  { name: 'Ophthalmology', slug: 'ophthalmology', description: 'Eye and vision care specialists.', icon: Eye },
  { name: 'Dentistry', slug: 'dentistry', description: 'Oral health and hygiene experts.', icon: Tooth },
  { name: 'Otolaryngology', slug: 'otolaryngology', description: 'Ear, nose, and throat specialists.', icon: Ear },
  { name: 'Immunology', slug: 'immunology', description: 'Immune system disorder experts.', icon: Shield },
  { name: 'General Practice', slug: 'general-practice', description: 'Primary care physicians.', icon: Stethoscope },
  { name: 'Endocrinology', slug: 'endocrinology', description: 'Hormone and metabolism specialists.', icon: StethoscopeIcon },
  { name: 'Gastroenterology', slug: 'gastroenterology', description: 'Digestive system disorder experts.', icon: GitCommitVertical },
  { name: 'Pulmonology', slug: 'pulmonology', description: 'Respiratory system specialists.', icon: Wind },
  { name: 'Nephrology', slug: 'nephrology', description: 'Kidney disease specialists.', icon: Droplets },
  { name: 'Urology', slug: 'urology', description: 'Urinary tract system experts.', icon: Droplets },
  { name: 'Oncology', slug: 'oncology', description: 'Cancer diagnosis and treatment.', icon: Dna },
  { name: 'Hematology', slug: 'hematology', description: 'Blood disorder specialists.', icon: Droplets },
  { name: 'Rheumatology', slug: 'rheumatology', description: 'Joint and autoimmune experts.', icon: Bone },
  { name: 'Infectious Disease', slug: 'infectious-disease', description: 'Infection treatment specialists.', icon: Microscope },
  { name: 'Allergy', slug: 'allergy', description: 'Allergy and immunology experts.', icon: Wind },
  { name: 'Geriatrics', slug: 'geriatrics', description: 'Elderly health care specialists.', icon: CircleUser },
  { name: 'Pathology', slug: 'pathology', description: 'Disease diagnosis through lab tests.', icon: FlaskConical },
  { name: 'Radiology', slug: 'radiology', description: 'Medical imaging specialists.', icon: CircleDot },
  { name: 'Anesthesiology', slug: 'anesthesiology', description: 'Anesthesia and pain management.', icon: Syringe },
  { name: 'Physical Therapy', slug: 'physical-therapy', description: 'Rehabilitation and movement experts.', icon: PersonStanding },
  { name: 'Occupational Therapy', slug: 'occupational-therapy', description: 'Therapy for daily living activities.', icon: Hand },
  { name: 'Podiatry', slug: 'podiatry', description: 'Foot and ankle disorder specialists.', icon: Footprints },
  { name: 'Chiropractic', slug: 'chiropractic', description: 'Spinal and neuromusculoskeletal care.', icon: Spline },
  { name: 'Nutrition', slug: 'nutrition', description: 'Diet and nutrition counseling.', icon: Grape },
  { name: 'Acupuncture', slug: 'acupuncture', description: 'Traditional Chinese medicine.', icon: Syringe },
  { name: 'Holistic Medicine', slug: 'holistic-medicine', description: 'Whole-body approach to health.', icon: Leaf },
  { name: 'Sports Medicine', slug: 'sports-medicine', description: 'Sports-related injury specialists.', icon: Activity },
  { name: 'Sleep Medicine', slug: 'sleep-medicine', description: 'Sleep disorder specialists.', icon: EyeOff },
  { name: 'Cosmetic Surgery', slug: 'cosmetic-surgery', description: 'Aesthetic and plastic surgery.', icon: Smile },
  { name: 'Bariatric Medicine', slug: 'bariatric-medicine', description: 'Obesity and weight management.', icon: Scale },
  { name: 'Pain Management', slug: 'pain-management', description: 'Chronic pain treatment specialists.', icon: HeartCrack },
  { name: 'Audiology', slug: 'audiology', description: 'Hearing and balance disorder experts.', icon: Ear },
  { name: 'Speech Therapy', slug: 'speech-therapy', description: 'Communication disorder therapy.', icon: Speech },
  { name: 'Genetics', slug: 'genetics', description: 'Genetic disorder counseling.', icon: Dna },
  { name: 'Emergency Medicine', slug: 'emergency-medicine', description: 'Emergency room physicians.', icon: Ambulance },
  { name: 'Neurosurgery', slug: 'neurosurgery', description: 'Surgical treatment of nervous system.', icon: BrainCircuit },
  { name: 'Cardiothoracic Surgery', slug: 'cardiothoracic-surgery', description: 'Surgical treatment of heart and chest.', icon: Heart },
  { name: 'Vascular Surgery', slug: 'vascular-surgery', description: 'Blood vessel surgery specialists.', icon: Spline },
  { name: 'Hepatology', slug: 'hepatology', description: 'Liver, gallbladder, and pancreas experts.', icon: GitCommitVertical },
  { name: 'Toxicology', slug: 'toxicology', description: 'Poisoning and drug overdose experts.', icon: FlaskConical },
  { name: 'Preventive Medicine', slug: 'preventive-medicine', description: 'Disease prevention specialists.', icon: Shield },
  { name: 'Proctology', slug: 'proctology', description: 'Colon, rectum, and anus specialists.', icon: CircleDot },
  { name: 'Andrology', slug: 'andrology', description: 'Male health specialists.', icon: Users },
  { name: 'Robotic Surgery', slug: 'robotic-surgery', description: 'Minimally invasive robotic surgery.', icon: Bot },
];

const allHours = Array.from({length: 24}, (_, i) => `${i.toString().padStart(2, '0')}:00`);
const today = new Date();
const availability = {};
for (let i = 0; i < 30; i++) {
  const date = new Date(today);
  date.setDate(today.getDate() + i);
  const dateString = date.toISOString().split('T')[0];
  availability[dateString] = allHours;
}


export const doctors: Doctor[] = [
  // Cardiology
  {
    id: 'dr-emily-carter-1',
    name: 'Dr. Emily Carter',
    specialization: 'cardiology',
    experience: 15,
    expertise: ['Interventional Cardiology', 'Echocardiography', 'Heart Failure Management'],
    availability: availability,
    bio: 'Dr. Emily Carter is a board-certified cardiologist with over 15 years of experience in treating complex heart conditions. She is dedicated to providing compassionate and comprehensive care to her patients.',
    reviews: `Dr. Carter was incredibly thorough and took the time to explain everything to me. Her staff is friendly and efficient.
    ---
    I had a great experience with Dr. Carter. She is very knowledgeable and has a wonderful bedside manner. Highly recommend.
    ---
    Wait times can be a bit long, but the quality of care is worth it. She really knows her stuff.`,
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-benjamin-lee-2',
    name: 'Dr. Benjamin Lee',
    specialization: 'cardiology',
    experience: 12,
    expertise: ['Clinical Cardiac Electrophysiology', 'Arrhythmia Management'],
    availability: availability,
    bio: 'Dr. Lee specializes in the electrical system of the heart, focusing on arrhythmias and device implantation. He is committed to using the latest technology to improve patient outcomes.',
    reviews: `Dr. Lee is fantastic. He explained my condition clearly and helped me understand my treatment options.
    ---
    The office is modern and clean. Dr. Lee is professional and clearly an expert in his field.`,
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-samuel-chen-3',
    name: 'Dr. Samuel Chen',
    specialization: 'cardiology',
    experience: 18,
    expertise: ['Preventive Cardiology', 'Lipid Management', 'Hypertension'],
    availability: availability,
    bio: 'Dr. Chen focuses on preventing heart disease through lifestyle modification and advanced lipid management. He believes in empowering patients with knowledge to take control of their cardiovascular health.',
    reviews: 'Dr. Chen is an excellent doctor who truly cares about prevention. He helped me lower my cholesterol significantly.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-isabella-garcia-4',
    name: 'Dr. Isabella Garcia',
    specialization: 'cardiology',
    experience: 10,
    expertise: ['Women\'s Heart Health', 'Cardio-Obstetrics'],
    availability: availability,
    bio: 'Dr. Garcia has a special interest in cardiovascular diseases in women, including heart health during pregnancy. She is a strong advocate for raising awareness about women\'s heart issues.',
    reviews: 'As a woman, I felt very seen and heard by Dr. Garcia. She is a wonderful and knowledgeable cardiologist.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-michael-harris-5',
    name: 'Dr. Michael Harris',
    specialization: 'cardiology',
    experience: 22,
    expertise: ['Structural Heart Disease', 'TAVR', 'MitraClip'],
    availability: availability,
    bio: 'Dr. Harris is a pioneer in minimally invasive treatments for structural heart disease. His expertise in procedures like TAVR has given many patients a new lease on life.',
    reviews: 'Dr. Harris performed my TAVR procedure, and the results were incredible. I can\'t thank him enough for his skill and care.',
    imageUrl: 'https://placehold.co/150x150.png'
  },

  // Dermatology
  {
    id: 'dr-sophia-rodriguez-6',
    name: 'Dr. Sophia Rodriguez',
    specialization: 'dermatology',
    experience: 8,
    expertise: ['Cosmetic Dermatology', 'Mohs Surgery', 'Pediatric Dermatology'],
    availability: availability,
    bio: 'Dr. Rodriguez is a renowned dermatologist known for her expertise in both medical and cosmetic dermatology. She values building long-term relationships with her patients.',
    reviews: `Dr. Rodriguez is amazing! She helped clear up my acne when nothing else worked. Her approach is very personalized.
    ---
    A bit expensive, but the results are undeniable. She\'s a true artist in cosmetic dermatology.
    ---
    The front desk was a little disorganized, but Dr. Rodriguez herself was punctual and very helpful.`,
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-alexander-kim-7',
    name: 'Dr. Alexander Kim',
    specialization: 'dermatology',
    experience: 14,
    expertise: ['Psoriasis', 'Eczema', 'Immunodermatology'],
    availability: availability,
    bio: 'Dr. Kim specializes in complex inflammatory skin conditions. He is dedicated to finding effective treatments for chronic diseases like psoriasis and eczema through clinical research and advanced therapies.',
    reviews: 'Dr. Kim has been a lifesaver for my severe eczema. His knowledge of the latest treatments is impressive.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-chloe-williams-8',
    name: 'Dr. Chloe Williams',
    specialization: 'dermatology',
    experience: 6,
    expertise: ['Skin Cancer Screening', 'Dermoscopy', 'Acne Treatment'],
    availability: availability,
    bio: 'Dr. Williams is passionate about early detection of skin cancer and provides thorough skin examinations. She also has a keen interest in developing effective acne treatment plans for teenagers and adults.',
    reviews: 'Dr. Williams is very thorough with her skin checks. I feel confident in her care.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-ethan-nguyen-9',
    name: 'Dr. Ethan Nguyen',
    specialization: 'dermatology',
    experience: 11,
    expertise: ['Hair Loss Disorders', 'Platelet-Rich Plasma (PRP) Therapy', 'Scalp Health'],
    availability: availability,
    bio: 'Dr. Nguyen is a leading expert in diagnosing and treating hair loss in both men and women. He offers innovative treatments like PRP to help restore hair growth and confidence.',
    reviews: 'I was losing hope about my hair loss until I saw Dr. Nguyen. His PRP treatments have made a noticeable difference.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-ava-jones-10',
    name: 'Dr. Ava Jones',
    specialization: 'dermatology',
    experience: 9,
    expertise: ['Contact Dermatitis', 'Patch Testing', 'Occupational Dermatology'],
    availability: availability,
    bio: 'Dr. Jones specializes in identifying and managing skin allergies and reactions. Her expertise in patch testing helps pinpoint the cause of allergic contact dermatitis.',
    reviews: 'Dr. Jones finally figured out what was causing my skin rashes. Her patch testing was extensive and very helpful.',
    imageUrl: 'https://placehold.co/150x150.png'
  },

  // Neurology
  {
    id: 'dr-olivia-chen-11',
    name: 'Dr. Olivia Chen',
    specialization: 'neurology',
    experience: 10,
    expertise: ['Epilepsy', 'Headache Medicine', 'Multiple Sclerosis'],
    availability: availability,
    bio: 'Dr. Chen is a compassionate neurologist who is passionate about helping patients manage chronic neurological conditions. She is actively involved in clinical research to advance treatment options.',
    reviews: `Dr. Chen has been instrumental in managing my migraines. She listens carefully and is always willing to try new approaches.
    ---
    Finding a good neurologist is tough, but Dr. Chen is a gem. She\'s patient, empathetic, and extremely knowledgeable.`,
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-liam-wilson-12',
    name: 'Dr. Liam Wilson',
    specialization: 'neurology',
    experience: 16,
    expertise: ['Movement Disorders', 'Parkinson\'s Disease', 'Deep Brain Stimulation (DBS)'],
    availability: availability,
    bio: 'Dr. Wilson is a specialist in movement disorders, providing comprehensive care for patients with Parkinson\'s disease, dystonia, and tremors. He is skilled in programming DBS devices.',
    reviews: 'Dr. Wilson\'s expertise in managing my father\'s Parkinson\'s has been invaluable. He is patient and incredibly knowledgeable about DBS.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-mia-davis-13',
    name: 'Dr. Mia Davis',
    specialization: 'neurology',
    experience: 7,
    expertise: ['Neuromuscular Medicine', 'ALS', 'Myasthenia Gravis'],
    availability: availability,
    bio: 'Dr. Davis is dedicated to diagnosing and treating neuromuscular diseases. She works closely with patients and families affected by conditions like ALS, offering both medical and emotional support.',
    reviews: 'Dr. Davis has a wonderful bedside manner and has been a great support for our family.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-noah-baker-14',
    name: 'Dr. Noah Baker',
    specialization: 'neurology',
    experience: 13,
    expertise: ['Stroke', 'Neurocritical Care', 'Cerebrovascular Disease'],
    availability: availability,
    bio: 'Dr. Baker specializes in the acute care of stroke patients and those with other life-threatening neurological conditions. His goal is to minimize brain injury and maximize recovery.',
    reviews: 'Dr. Baker was direct and clear during a very stressful time. His quick actions made a huge difference in my recovery.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-zoe-king-15',
    name: 'Dr. Zoe King',
    specialization: 'neurology',
    experience: 9,
    expertise: ['Cognitive Neurology', 'Alzheimer\'s Disease', 'Dementia'],
    availability: availability,
    bio: 'Dr. King focuses on memory and cognitive disorders. She provides comprehensive evaluations and works with families to create care plans for patients with dementia and Alzheimer\'s disease.',
    reviews: 'Dr. King was so patient and kind with my mother. Her guidance has been a great help to our family.',
    imageUrl: 'https://placehold.co/150x150.png'
  },

  // Orthopedics
  {
    id: 'dr-james-anderson-16',
    name: 'Dr. James Anderson',
    specialization: 'orthopedics',
    experience: 20,
    expertise: ['Sports Medicine', 'Joint Replacement Surgery', 'Arthroscopic Surgery'],
    availability: availability,
    bio: 'With two decades of experience, Dr. Anderson is a leading orthopedic surgeon specializing in sports injuries and joint reconstruction. He has worked with numerous professional athletes.',
    reviews: `Dr. Anderson fixed my knee when I thought I\'d never play soccer again. He\'s a miracle worker.
    ---
    Very professional and direct. He doesn\'t sugarcoat things, which I appreciate. The physical therapy team he works with is also top-notch.`,
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-hanna-yoon-17',
    name: 'Dr. Hanna Yoon',
    specialization: 'orthopedics',
    experience: 15,
    expertise: ['Hand and Upper Extremity Surgery', 'Microsurgery', 'Carpal Tunnel Syndrome'],
    availability: availability,
    bio: 'Dr. Yoon is a board-certified orthopedic surgeon specializing in conditions of the hand, wrist, and elbow. She is skilled in intricate microsurgical techniques.',
    reviews: 'Dr. Yoon did an amazing job on my wrist surgery. My recovery was quick and I have full function back.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-leo-martinez-18',
    name: 'Dr. Leo Martinez',
    specialization: 'orthopedics',
    experience: 12,
    expertise: ['Pediatric Orthopedics', 'Scoliosis', 'Clubfoot'],
    availability: availability,
    bio: 'Dr. Martinez is dedicated to caring for the musculoskeletal needs of children, from infants to teenagers. He is known for his gentle approach and ability to connect with his young patients.',
    reviews: 'Dr. Martinez was fantastic with my daughter. He made her feel comfortable and explained her treatment in a way she could understand.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-charlotte-murphy-19',
    name: 'Dr. Charlotte Murphy',
    specialization: 'orthopedics',
    experience: 18,
    expertise: ['Spine Surgery', 'Minimally Invasive Spine Surgery', 'Degenerative Disc Disease'],
    availability: availability,
    bio: 'Dr. Murphy is a highly respected spine surgeon who utilizes the latest minimally invasive techniques to treat back and neck pain, reducing recovery time for her patients.',
    reviews: 'My back pain is finally gone thanks to Dr. Murphy. Her minimally invasive approach was a game-changer for me.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-william-clark-20',
    name: 'Dr. William Clark',
    specialization: 'orthopedics',
    experience: 25,
    expertise: ['Orthopedic Oncology', 'Limb Salvage Surgery', 'Bone and Soft Tissue Tumors'],
    availability: availability,
    bio: 'Dr. Clark specializes in the treatment of bone and soft tissue tumors. He is a leader in limb salvage surgery, helping patients preserve function and quality of life.',
    reviews: 'Dr. Clark\'s expertise and compassion during a difficult diagnosis were incredible. We are so grateful for his care.',
    imageUrl: 'https://placehold.co/150x150.png'
  },

  // Pediatrics
  {
    id: 'dr-lucy-thompson-21',
    name: 'Dr. Lucy Thompson',
    specialization: 'pediatrics',
    experience: 10,
    expertise: ['General Pediatrics', 'Newborn Care', 'Adolescent Medicine'],
    availability: availability,
    bio: 'Dr. Thompson loves watching her patients grow from newborns to young adults. She provides comprehensive care with a focus on prevention and building strong, trusting relationships with families.',
    reviews: 'Dr. Thompson is the best pediatrician! She is so patient and kind with my kids, and always takes the time to answer all my questions.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-jacob-miller-22',
    name: 'Dr. Jacob Miller',
    specialization: 'pediatrics',
    experience: 14,
    expertise: ['Pediatric Pulmonology', 'Asthma', 'Cystic Fibrosis'],
    availability: availability,
    bio: 'Dr. Miller is a specialist in childhood respiratory conditions. He works to help children with asthma and other breathing problems live full and active lives.',
    reviews: 'Thanks to Dr. Miller, my son\'s asthma is finally under control. He is a wonderful and caring doctor.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-emily-sato-23',
    name: 'Dr. Emily Sato',
    specialization: 'pediatrics',
    experience: 8,
    expertise: ['Developmental-Behavioral Pediatrics', 'ADHD', 'Autism Spectrum Disorder'],
    availability: availability,
    bio: 'Dr. Sato specializes in evaluating and supporting children with developmental and behavioral challenges. She partners with families and schools to create comprehensive support plans.',
    reviews: 'Dr. Sato provided us with so much clarity and support after our child\'s diagnosis. She is an invaluable resource.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-aiden-brooks-24',
    name: 'Dr. Aiden Brooks',
    specialization: 'pediatrics',
    experience: 12,
    expertise: ['Pediatric Cardiology', 'Congenital Heart Defects', 'Fetal Cardiology'],
    availability: availability,
    bio: 'Dr. Brooks cares for children with heart conditions, from before birth through young adulthood. He is skilled in non-invasive imaging and managing complex congenital heart defects.',
    reviews: 'Dr. Brooks has been caring for our son since he was born. His expertise and calm demeanor have been a comfort to our family.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-grace-kim-25',
    name: 'Dr. Grace Kim',
    specialization: 'pediatrics',
    experience: 9,
    expertise: ['Pediatric Gastroenterology', 'Inflammatory Bowel Disease (IBD)', 'Celiac Disease'],
    availability: availability,
    bio: 'Dr. Kim specializes in digestive, liver, and nutritional problems in children. She is committed to helping her young patients feel better and thrive.',
    reviews: 'Dr. Kim was so knowledgeable and helped us navigate my daughter\'s celiac diagnosis. We are so thankful for her guidance.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  
  // Psychiatry
  {
    id: 'dr-julian-lopez-26',
    name: 'Dr. Julian Lopez',
    specialization: 'psychiatry',
    experience: 15,
    expertise: ['Adult Psychiatry', 'Mood Disorders', 'Anxiety Disorders'],
    availability: availability,
    bio: 'Dr. Lopez provides a balanced approach to mental health, combining psychotherapy and medication management to help adults navigate mood and anxiety disorders. He creates a safe and non-judgmental space for his patients.',
    reviews: 'Dr. Lopez is a compassionate and insightful psychiatrist. He has helped me immensely in managing my anxiety.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-claire-danvers-27',
    name: 'Dr. Claire Danvers',
    specialization: 'psychiatry',
    experience: 11,
    expertise: ['Child and Adolescent Psychiatry', 'ADHD', 'Family Therapy'],
    availability: availability,
    bio: 'Dr. Danvers specializes in the mental health of children and teenagers. She believes in a holistic approach, often involving family therapy to support her young patients.',
    reviews: 'Dr. Danvers has a unique ability to connect with teenagers. She has been a great help to our son and our family.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-ryan-patel-28',
    name: 'Dr. Ryan Patel',
    specialization: 'psychiatry',
    experience: 9,
    expertise: ['Geriatric Psychiatry', 'Dementia-Related Behavioral Issues', 'Late-Life Depression'],
    availability: availability,
    bio: 'Dr. Patel focuses on the mental health needs of older adults. He is experienced in managing the complex interplay between cognitive decline and psychiatric symptoms.',
    reviews: 'Dr. Patel has been incredibly patient and understanding in caring for my elderly father. His expertise has been a great comfort.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-sabrina-khan-29',
    name: 'Dr. Sabrina Khan',
    specialization: 'psychiatry',
    experience: 13,
    expertise: ['Addiction Psychiatry', 'Dual Diagnosis', 'Substance Use Disorders'],
    availability: availability,
    bio: 'Dr. Khan is dedicated to helping individuals struggling with addiction. She provides comprehensive care for substance use disorders, including managing co-occurring mental health conditions.',
    reviews: 'Dr. Khan\'s approach to addiction treatment is both compassionate and effective. She helped me get my life back on track.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-oscar-cheng-30',
    name: 'Dr. Oscar Cheng',
    specialization: 'psychiatry',
    experience: 7,
    expertise: ['Psychotic Disorders', 'Schizophrenia', 'Bipolar Disorder with Psychosis'],
    availability: availability,
    bio: 'Dr. Cheng specializes in the treatment of psychotic disorders, using a combination of medication, therapy, and psychosocial support to help patients manage their symptoms and improve their quality of life.',
    reviews: 'Dr. Cheng is a non-judgmental and highly skilled psychiatrist who has been instrumental in my recovery journey.',
    imageUrl: 'https://placehold.co/150x150.png'
  },

  // Ophthalmology
  {
    id: 'dr-alice-morgan-31',
    name: 'Dr. Alice Morgan',
    specialization: 'ophthalmology',
    experience: 17,
    expertise: ['Cataract Surgery', 'Refractive Surgery (LASIK)', 'Corneal Disease'],
    availability: availability,
    bio: 'Dr. Morgan is a highly skilled eye surgeon with extensive experience in cataract and LASIK surgery. She is committed to helping her patients achieve their best possible vision.',
    reviews: 'My LASIK surgery with Dr. Morgan was a complete success. She and her team were professional and reassuring throughout the process.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-david-rivera-32',
    name: 'Dr. David Rivera',
    specialization: 'ophthalmology',
    experience: 14,
    expertise: ['Glaucoma', 'Minimally Invasive Glaucoma Surgery (MIGS)', 'Laser Trabeculoplasty'],
    availability: availability,
    bio: 'Dr. Rivera is a glaucoma specialist dedicated to preserving vision for patients with this chronic condition. He utilizes the latest surgical and laser treatments to manage intraocular pressure.',
    reviews: 'Dr. Rivera is an excellent glaucoma specialist. He is thorough in his explanations and very proactive in his treatment approach.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-beatrice-wexler-33',
    name: 'Dr. Beatrice Wexler',
    specialization: 'ophthalmology',
    experience: 20,
    expertise: ['Retina Specialist', 'Macular Degeneration', 'Diabetic Retinopathy'],
    availability: availability,
    bio: 'Dr. Wexler is a leading expert in diseases of the retina. She provides cutting-edge treatments for conditions like macular degeneration and diabetic retinopathy to protect her patients\' sight.',
    reviews: 'Dr. Wexler has been managing my macular degeneration for years. Her expertise has been crucial in slowing the progression of the disease.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-felix-grant-34',
    name: 'Dr. Felix Grant',
    specialization: 'ophthalmology',
    experience: 9,
    expertise: ['Pediatric Ophthalmology', 'Strabismus (Crossed Eyes)', 'Amblyopia (Lazy Eye)'],
    availability: availability,
    bio: 'Dr. Grant specializes in the eye care of children. He has a friendly and engaging manner that helps put his young patients at ease during examinations and treatments.',
    reviews: 'Dr. Grant is wonderful with kids. He made my daughter\'s eye exam a fun experience, and his treatment for her lazy eye has worked wonders.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-nadia-al-jumaili-35',
    name: 'Dr. Nadia Al-Jumaili',
    specialization: 'ophthalmology',
    experience: 12,
    expertise: ['Oculoplastic Surgery', 'Eyelid Surgery', 'Orbital Tumors'],
    availability: availability,
    bio: 'Dr. Al-Jumaili is a surgeon who specializes in plastic and reconstructive surgery of the eyelids, tear ducts, and orbit. She combines cosmetic and functional approaches to achieve the best results.',
    reviews: 'Dr. Al-Jumaili is both a skilled surgeon and an artist. She did a beautiful job on my eyelid surgery.',
    imageUrl: 'https://placehold.co/150x150.png'
  },

  // Dentistry
  {
    id: 'dr-kevin-tanaka-36',
    name: 'Dr. Kevin Tanaka',
    specialization: 'dentistry',
    experience: 15,
    expertise: ['Cosmetic Dentistry', 'Veneers', 'Teeth Whitening'],
    availability: availability,
    bio: 'Dr. Tanaka is a cosmetic dentist dedicated to creating beautiful, healthy smiles. He uses the latest technology to provide high-quality veneers, crowns, and teeth whitening services.',
    reviews: 'Dr. Tanaka transformed my smile! I am so happy with my veneers. The process was painless and the results are amazing.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-rachel-levine-37',
    name: 'Dr. Rachel Levine',
    specialization: 'dentistry',
    experience: 18,
    expertise: ['Orthodontics', 'Invisalign', 'Braces for all ages'],
    availability: availability,
    bio: 'Dr. Levine is an orthodontist who loves helping patients achieve straight, functional smiles. She offers both traditional braces and modern clear aligner therapy.',
    reviews: 'Dr. Levine and her staff are fantastic. My daughter loves her Invisalign, and her teeth are looking great.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-omar-jackson-38',
    name: 'Dr. Omar Jackson',
    specialization: 'dentistry',
    experience: 11,
    expertise: ['Periodontics', 'Dental Implants', 'Gum Disease Treatment'],
    availability: availability,
    bio: 'Dr. Jackson is a specialist in gum health and dental implants. He provides expert care for gum disease and surgically places dental implants to restore missing teeth.',
    reviews: 'Dr. Jackson is a very skilled periodontist. He made the dental implant process smooth and comfortable.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-sara-goldstein-39',
    name: 'Dr. Sara Goldstein',
    specialization: 'dentistry',
    experience: 20,
    expertise: ['Endodontics', 'Root Canal Therapy', 'Traumatic Dental Injuries'],
    availability: availability,
    bio: 'Dr. Goldstein specializes in saving teeth through root canal therapy. She uses advanced techniques to ensure the procedure is as comfortable and effective as possible.',
    reviews: 'Nobody wants a root canal, but Dr. Goldstein made it a surprisingly painless experience. She is an expert.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-maria-fernandez-40',
    name: 'Dr. Maria Fernandez',
    specialization: 'dentistry',
    experience: 9,
    expertise: ['Pediatric Dentistry', 'Special Needs Dentistry', 'Preventive Care'],
    availability: availability,
    bio: 'Dr. Fernandez creates a fun and welcoming environment for children. She is passionate about teaching good oral hygiene habits from a young age and is experienced in caring for children with special needs.',
    reviews: 'Dr. Maria is a "tooth fairy" in disguise! My kids actually look forward to going to the dentist.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Otolaryngology
  {
    id: 'dr-ahmed-khan-41',
    name: 'Dr. Ahmed Khan',
    specialization: 'otolaryngology',
    experience: 14,
    expertise: ['Sinus Surgery', 'Allergy', 'Sleep Apnea'],
    availability: availability,
    bio: 'Dr. Khan is an expert in treating disorders of the ear, nose, and throat, with a special focus on sinus and allergy-related issues.',
    reviews: 'Dr. Khan helped me finally breathe clearly after years of sinus problems. His expertise is unmatched.',
    imageUrl: 'https://placehold.co/150x150.png',
  },
  {
    id: 'dr-susan-choi-42',
    name: 'Dr. Susan Choi',
    specialization: 'otolaryngology',
    experience: 10,
    expertise: ['Pediatric ENT', 'Tonsil and Adenoid Surgery'],
    availability: availability,
    bio: 'Dr. Choi specializes in ENT problems in children and is known for her gentle and reassuring approach with young patients.',
    reviews: 'Dr. Choi was amazing with my son. She made the tonsillectomy process so much less scary for him.',
    imageUrl: 'https://placehold.co/150x150.png',
  },
  {
    id: 'dr-brian-foster-43',
    name: 'Dr. Brian Foster',
    specialization: 'otolaryngology',
    experience: 20,
    expertise: ['Head and Neck Surgery', 'Thyroid Surgery'],
    availability: availability,
    bio: 'Dr. Foster is a highly experienced surgeon focusing on cancers and other conditions of the head and neck.',
    reviews: 'Dr. Foster\'s surgical skill and compassionate care were a blessing during a very difficult time.',
    imageUrl: 'https://placehold.co/150x150.png',
  },
  {
    id: 'dr-linda-pham-44',
    name: 'Dr. Linda Pham',
    specialization: 'otolaryngology',
    experience: 8,
    expertise: ['Laryngology', 'Voice Disorders', 'Swallowing Disorders'],
    availability: availability,
    bio: 'Dr. Pham works with patients who have voice problems, from professional singers to those with medical conditions affecting their vocal cords.',
    reviews: 'As a singer, my voice is my livelihood. Dr. Pham\'s care was exceptional in helping me recover from a vocal injury.',
    imageUrl: 'https://placehold.co/150x150.png',
  },
  {
    id: 'dr-marcus-welby-45',
    name: 'Dr. Marcus Welby',
    specialization: 'otolaryngology',
    experience: 25,
    expertise: ['Otology', 'Hearing Loss', 'Cochlear Implants'],
    availability: availability,
    bio: 'Dr. Welby is a leading specialist in hearing disorders and cochlear implantation, dedicated to restoring the gift of hearing.',
    reviews: 'Dr. Welby and his team are phenomenal. The cochlear implant has changed my life.',
    imageUrl: 'https://placehold.co/150x150.png',
  },
  // Immunology
  {
    id: 'dr-eleanor-vance-46',
    name: 'Dr. Eleanor Vance',
    specialization: 'immunology',
    experience: 18,
    expertise: ['Autoimmune Diseases', 'Lupus', 'Rheumatoid Arthritis'],
    availability: availability,
    bio: 'Dr. Vance specializes in complex autoimmune conditions and is dedicated to research and patient care in this challenging field.',
    reviews: 'Dr. Vance is a brilliant and compassionate doctor who has been instrumental in managing my lupus.',
    imageUrl: 'https://placehold.co/150x150.png',
  },
  {
    id: 'dr-rajiv-mehta-47',
    name: 'Dr. Rajiv Mehta',
    specialization: 'immunology',
    experience: 12,
    expertise: ['Primary Immunodeficiency', 'Allergic Disorders'],
    availability: availability,
    bio: 'Dr. Mehta focuses on diagnosing and treating primary immunodeficiency diseases, providing life-changing care for his patients.',
    reviews: 'Dr. Mehta provided a diagnosis that had eluded doctors for years. We are so grateful for his expertise.',
    imageUrl: 'https://placehold.co/150x150.png',
  },
  {
    id: 'dr-fatima-ali-48',
    name: 'Dr. Fatima Ali',
    specialization: 'immunology',
    experience: 9,
    expertise: ['Food Allergies', 'Asthma', 'Eczema'],
    availability: availability,
    bio: 'Dr. Ali is an expert in allergic immunology, helping patients of all ages manage and understand their allergies.',
    reviews: 'Dr. Ali has been a huge help in managing my son\'s severe food allergies. Her guidance is practical and reassuring.',
    imageUrl: 'https://placehold.co/150x150.png',
  },
  {
    id: 'dr-arthur-pendleton-49',
    name: 'Dr. Arthur Pendleton',
    specialization: 'immunology',
    experience: 22,
    expertise: ['Transplant Immunology', 'Clinical Research'],
    availability: availability,
    bio: 'Dr. Pendleton works with transplant patients to manage their immune systems and prevent organ rejection.',
    reviews: 'Dr. Pendleton is a vital part of my post-transplant care team. His knowledge is immense.',
    imageUrl: 'https://placehold.co/150x150.png',
  },
  {
    id: 'dr-helena-rossi-50',
    name: 'Dr. Helena Rossi',
    specialization: 'immunology',
    experience: 15,
    expertise: ['HIV/AIDS', 'Infectious Disease Immunology'],
    availability: availability,
    bio: 'Dr. Rossi provides comprehensive and compassionate care for patients with HIV/AIDS, focusing on the latest treatments.',
    reviews: 'Dr. Rossi is a knowledgeable and non-judgmental doctor who provides excellent care.',
    imageUrl: 'https://placehold.co/150x150.png',
  },
  // General Practice
  {
    id: 'dr-jane-doe-51',
    name: 'Dr. Jane Doe',
    specialization: 'general-practice',
    experience: 10,
    expertise: ['Preventive Care', 'Chronic Disease Management'],
    availability: availability,
    bio: 'Dr. Doe is a dedicated family physician who believes in building long-term relationships with her patients and their families.',
    reviews: 'Dr. Doe is a wonderful doctor. She is patient, thorough, and truly cares about her patients\' well-being.',
    imageUrl: 'https://placehold.co/150x150.png',
  },
  {
    id: 'dr-john-smith-52',
    name: 'Dr. John Smith',
    specialization: 'general-practice',
    experience: 25,
    expertise: ['Geriatric Care', 'Complex Medical Issues'],
    availability: availability,
    bio: 'With over two decades of experience, Dr. Smith is a pillar of the community, known for his diagnostic skill and compassionate care.',
    reviews: 'Dr. Smith has been my doctor for 20 years. He is simply the best.',
    imageUrl: 'https://placehold.co/150x150.png',
  },
  {
    id: 'dr-mary-jackson-53',
    name: 'Dr. Mary Jackson',
    specialization: 'general-practice',
    experience: 8,
    expertise: ['Women\'s Health', 'Pediatrics'],
    availability: availability,
    bio: 'Dr. Jackson has a special interest in women\'s health and pediatrics, providing comprehensive care for the whole family.',
    reviews: 'Dr. Jackson is fantastic with both me and my kids. It\'s so convenient to have one doctor for the whole family.',
    imageUrl: 'https://placehold.co/150x150.png',
  },
  {
    id: 'dr-peter-jones-54',
    name: 'Dr. Peter Jones',
    specialization: 'general-practice',
    experience: 12,
    expertise: ['Sports Medicine', 'Minor Procedures'],
    availability: availability,
    bio: 'Dr. Jones is a GP with a background in sports medicine, making him a great choice for active individuals and families.',
    reviews: 'Dr. Jones is knowledgeable and practical. He understands the needs of athletes.',
    imageUrl: 'https://placehold.co/150x150.png',
  },
  {
    id: 'dr-sarah-lee-55',
    name: 'Dr. Sarah Lee',
    specialization: 'general-practice',
    experience: 15,
    expertise: ['Mental Health', 'Adolescent Medicine'],
    availability: availability,
    bio: 'Dr. Lee takes a holistic approach to family medicine, with a strong focus on integrating mental and physical health.',
    reviews: 'Dr. Lee is a compassionate doctor who understands the importance of mental health.',
    imageUrl: 'https://placehold.co/150x150.png',
  },
  // Endocrinology
  {
    id: 'dr-alan-grant-56',
    name: 'Dr. Alan Grant',
    specialization: 'endocrinology',
    experience: 20,
    expertise: ['Diabetes Management', 'Thyroid Disorders'],
    availability: availability,
    bio: 'Dr. Grant is a leading endocrinologist specializing in diabetes and thyroid conditions. He is dedicated to helping patients manage their hormonal health.',
    reviews: 'Dr. Grant has been a game-changer in managing my diabetes. His expertise is top-notch.',
    imageUrl: 'https://placehold.co/150x150.png',
  },
  {
    id: 'dr-ellie-sattler-57',
    name: 'Dr. Ellie Sattler',
    specialization: 'endocrinology',
    experience: 15,
    expertise: ['Polycystic Ovary Syndrome (PCOS)', 'Menopause'],
    availability: availability,
    bio: 'Dr. Sattler focuses on female endocrine disorders, providing expert care for conditions like PCOS and managing hormonal changes during menopause.',
    reviews: 'Dr. Sattler is incredibly knowledgeable and empathetic. She has helped me immensely with my PCOS.',
    imageUrl: 'https://placehold.co/150x150.png',
  },
  {
    id: 'dr-ian-malcolm-58',
    name: 'Dr. Ian Malcolm',
    specialization: 'endocrinology',
    experience: 18,
    expertise: ['Metabolic Bone Disease', 'Osteoporosis'],
    availability: availability,
    bio: 'Dr. Malcolm specializes in disorders of bone metabolism, focusing on osteoporosis and other conditions that affect bone strength.',
    reviews: 'Dr. Malcolm is thorough and takes the time to explain everything. His treatment plan has been very effective for my osteoporosis.',
    imageUrl: 'https://placehold.co/150x150.png',
  },
  {
    id: 'dr-robert-muldoon-59',
    name: 'Dr. Robert Muldoon',
    specialization: 'endocrinology',
    experience: 12,
    expertise: ['Adrenal and Pituitary Disorders', 'Endocrine Hypertension'],
    availability: availability,
    bio: 'Dr. Muldoon is an expert in complex adrenal and pituitary gland disorders, providing diagnostic clarity and advanced treatment options.',
    reviews: 'Dr. Muldoon diagnosed a rare pituitary issue for me and has provided excellent care ever since.',
    imageUrl: 'https://placehold.co/150x150.png',
  },
  {
    id: 'dr-lex-murphy-60',
    name: 'Dr. Lex Murphy',
    specialization: 'endocrinology',
    experience: 8,
    expertise: ['Pediatric Endocrinology', 'Growth Disorders'],
    availability: availability,
    bio: 'Dr. Murphy specializes in hormonal disorders in children, including growth issues and pediatric diabetes.',
    reviews: 'Dr. Murphy is wonderful with children and has been a great support for our family in managing our son\'s growth disorder.',
    imageUrl: 'https://placehold.co/150x150.png',
  },
  // Gastroenterology
  {
    id: 'dr-gordon-freeman-61',
    name: 'Dr. Gordon Freeman',
    specialization: 'gastroenterology',
    experience: 17,
    expertise: ['Inflammatory Bowel Disease (IBD)', 'Crohn\'s Disease', 'Ulcerative Colitis'],
    availability: availability,
    bio: 'Dr. Freeman is a specialist in IBD, dedicated to using the latest therapies to help patients achieve and maintain remission.',
    reviews: 'Dr. Freeman\'s expertise in Crohn\'s disease is evident. He has helped me manage my condition better than any other doctor.',
    imageUrl: 'https://placehold.co/150x150.png',
  },
  {
    id: 'dr-alyx-vance-62',
    name: 'Dr. Alyx Vance',
    specialization: 'gastroenterology',
    experience: 12,
    expertise: ['Hepatology', 'Liver Disease', 'Hepatitis C'],
    availability: availability,
    bio: 'Dr. Vance focuses on liver diseases, providing comprehensive care for conditions ranging from fatty liver disease to viral hepatitis.',
    reviews: 'Dr. Vance is a caring and knowledgeable hepatologist. She guided me through my Hepatitis C treatment with great success.',
    imageUrl: 'https://placehold.co/150x150.png',
  },
  {
    id: 'dr-eli-vance-63',
    name: 'Dr. Eli Vance',
    specialization: 'gastroenterology',
    experience: 25,
    expertise: ['Advanced Endoscopy', 'ERCP', 'EUS'],
    availability: availability,
    bio: 'Dr. Vance is a leader in advanced endoscopic procedures, performing complex diagnostic and therapeutic interventions.',
    reviews: 'Dr. Vance\'s skill in endoscopy is incredible. He was able to diagnose and treat a problem that others had missed.',
    imageUrl: 'https://placehold.co/150x150.png',
  },
  {
    id: 'dr-barney-calhoun-64',
    name: 'Dr. Barney Calhoun',
    specialization: 'gastroenterology',
    experience: 10,
    expertise: ['Functional GI Disorders', 'Irritable Bowel Syndrome (IBS)'],
    availability: availability,
    bio: 'Dr. Calhoun specializes in functional gastrointestinal disorders like IBS, taking a holistic approach to manage symptoms and improve quality of life.',
    reviews: 'Dr. Calhoun actually listens. He has helped me manage my IBS symptoms with a combination of diet, lifestyle changes, and medication.',
    imageUrl: 'https://placehold.co/150x150.png',
  },
  {
    id: 'dr-judith-mossman-65',
    name: 'Dr. Judith Mossman',
    specialization: 'gastroenterology',
    experience: 14,
    expertise: ['Celiac Disease', 'Nutrition', 'Small Bowel Disorders'],
    availability: availability,
    bio: 'Dr. Mossman has a special interest in celiac disease and other malabsorption disorders, working closely with patients on diet and treatment.',
    reviews: 'Dr. Mossman is extremely knowledgeable about celiac disease and has been a wonderful resource for me.',
    imageUrl: 'https://placehold.co/150x150.png',
  },
  // Pulmonology
  {
    id: 'dr-walter-white-66',
    name: 'Dr. Walter White',
    specialization: 'pulmonology',
    experience: 22,
    expertise: ['Lung Cancer', 'Interventional Pulmonology'],
    availability: availability,
    bio: 'Dr. White is a top-tier pulmonologist with a focus on diagnosing and staging lung cancer using advanced interventional techniques.',
    reviews: 'Dr. White\'s expertise in interventional pulmonology was crucial in my lung cancer diagnosis. He is brilliant and direct.',
    imageUrl: 'https://placehold.co/150x150.png',
  },
  {
    id: 'dr-jesse-pinkman-67',
    name: 'Dr. Jesse Pinkman',
    specialization: 'pulmonology',
    experience: 9,
    expertise: ['Asthma', 'COPD', 'Pulmonary Rehabilitation'],
    availability: availability,
    bio: 'Dr. Pinkman is passionate about helping patients with chronic lung diseases like asthma and COPD breathe easier and live more active lives.',
    reviews: 'Dr. Pinkman has a great bedside manner and has really helped me get my severe asthma under control.',
    imageUrl: 'https://placehold.co/150x150.png',
  },
  {
    id: 'dr-skyler-white-68',
    name: 'Dr. Skyler White',
    specialization: 'pulmonology',
    experience: 16,
    expertise: ['Sleep Medicine', 'Sleep Apnea', 'Insomnia'],
    availability: availability,
    bio: 'Dr. White is a dual-certified pulmonologist and sleep medicine specialist, an expert in diagnosing and treating sleep-disordered breathing.',
    reviews: 'Dr. White helped me finally get a good night\'s sleep. My CPAP therapy has been life-changing.',
    imageUrl: 'https://placehold.co/150x150.png',
  },
  {
    id: 'dr-hank-schrader-69',
    name: 'Dr. Hank Schrader',
    specialization: 'pulmonology',
    experience: 18,
    expertise: ['Critical Care Medicine', 'ARDS', 'Sepsis'],
    availability: availability,
    bio: 'Dr. Schrader is an intensivist who cares for the most critically ill patients in the ICU with lung-related emergencies.',
    reviews: 'Dr. Schrader is a calm and commanding presence in the ICU. He saved my life.',
    imageUrl: 'https://placehold.co/150x150.png',
  },
  {
    id: 'dr-gus-fring-70',
    name: 'Dr. Gus Fring',
    specialization: 'pulmonology',
    experience: 25,
    expertise: ['Interstitial Lung Disease', 'Pulmonary Fibrosis'],
    availability: availability,
    bio: 'Dr. Fring is a meticulous and renowned expert in rare and complex interstitial lung diseases, including pulmonary fibrosis.',
    reviews: 'Dr. Fring is the foremost expert in his field. His precise approach to managing my condition has been invaluable.',
    imageUrl: 'https://placehold.co/150x150.png',
  },
  // Nephrology
  {
    id: 'dr-lucille-bluth-71',
    name: 'Dr. Lucille Bluth',
    specialization: 'nephrology',
    experience: 30,
    expertise: ['Hypertension', 'Chronic Kidney Disease'],
    availability: availability,
    bio: 'A seasoned nephrologist, Dr. Bluth manages complex cases of kidney disease and hypertension with a sharp, no-nonsense approach.',
    reviews: 'Dr. Bluth is direct and to the point, and she knows her stuff. My blood pressure has never been more controlled.',
    imageUrl: 'https://placehold.co/150x150.png',
  },
  {
    id: 'dr-tobias-funke-72',
    name: 'Dr. Tobias Fünke',
    specialization: 'nephrology',
    experience: 10,
    expertise: ['Glomerular Diseases', 'Dialysis'],
    availability: availability,
    bio: 'Dr. Fünke brings a unique and enthusiastic perspective to nephrology, with a special interest in glomerular diseases and patient-centered dialysis care.',
    reviews: 'Dr. Fünke has a... unique way of explaining things, but he\'s a very caring doctor. The dialysis unit is well-run.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-michael-bluth-73',
    name: 'Dr. Michael Bluth',
    specialization: 'nephrology',
    experience: 15,
    expertise: ['Kidney Stones', 'Electrolyte Disorders'],
    availability: availability,
    bio: 'Dr. Bluth is a practical and dedicated nephrologist focused on preventing and managing kidney stones and complex electrolyte imbalances.',
    reviews: 'Dr. Bluth is a sensible doctor who takes the time to explain treatment options clearly. He helped me get through a painful kidney stone episode.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-lindsay-funke-74',
    name: 'Dr. Lindsay Fünke',
    specialization: 'nephrology',
    experience: 8,
    expertise: ['Kidney Transplantation', 'Advocacy'],
    availability: availability,
    bio: 'Dr. Fünke is a passionate advocate for organ donation and provides dedicated post-transplant care for kidney recipients.',
    reviews: 'Dr. Fünke is a very compassionate doctor who is clearly passionate about her work.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-gob-bluth-75',
    name: 'Dr. G.O.B. Bluth',
    specialization: 'nephrology',
    experience: 12,
    expertise: ['Interventional Nephrology', 'Dialysis Access'],
    availability: availability,
    bio: 'Dr. Bluth specializes in the surgical and interventional aspects of nephrology, ensuring patients have reliable and functional dialysis access.',
    reviews: 'He can be a bit dramatic, but Dr. Bluth is an excellent interventional nephrologist. My fistula is working perfectly.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Urology
  {
    id: 'dr-ron-swanson-76',
    name: 'Dr. Ron Swanson',
    specialization: 'urology',
    experience: 20,
    expertise: ['Prostate Cancer', 'Kidney Stones', 'Vasectomy'],
    availability: availability,
    bio: 'Dr. Swanson provides straightforward, effective urological care with a focus on patient privacy and no-nonsense solutions.',
    reviews: 'Dr. Swanson is a man of few words, but he is an excellent surgeon. The procedure was quick and recovery was easy.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-leslie-knope-77',
    name: 'Dr. Leslie Knope',
    specialization: 'urology',
    experience: 15,
    expertise: ['Female Urology', 'Pelvic Floor Disorders', 'Incontinence'],
    availability: availability,
    bio: 'Dr. Knope is an incredibly dedicated and enthusiastic urologist specializing in female pelvic health. She creates detailed, personalized care plans for every patient.',
    reviews: 'Dr. Knope is the most organized and caring doctor I have ever met. She has binders of information and has been a huge help.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-ben-wyatt-78',
    name: 'Dr. Ben Wyatt',
    specialization: 'urology',
    experience: 12,
    expertise: ['Robotic Surgery', 'Minimally Invasive Procedures'],
    availability: availability,
    bio: 'Dr. Wyatt is a precise and detail-oriented urologic surgeon who specializes in advanced robotic and minimally invasive techniques.',
    reviews: 'Dr. Wyatt is a real pro. He explained the robotic surgery in great detail, and the results were fantastic.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-april-ludgate-79',
    name: 'Dr. April Ludgate',
    specialization: 'urology',
    experience: 8,
    expertise: ['General Urology', 'Men\'s Health'],
    availability: availability,
    bio: 'Dr. Ludgate has a unique, dry wit but provides surprisingly compassionate and effective care for a wide range of urologic issues.',
    reviews: 'Her bedside manner is... different. But she\'s a great urologist and I felt like she genuinely cared, in her own way.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-andy-dwyer-80',
    name: 'Dr. Andy Dwyer',
    specialization: 'urology',
    experience: 7,
    expertise: ['Pediatric Urology', 'Patient Education'],
    availability: availability,
    bio: 'Dr. Dwyer is fantastic with children, using humor and songs to make pediatric urology appointments less intimidating for his young patients.',
    reviews: 'Dr. Dwyer is a big kid himself, which is why he\'s the perfect doctor for children. He made my son feel so comfortable.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Oncology
  {
    id: 'dr-tony-stark-81',
    name: 'Dr. Tony Stark',
    specialization: 'oncology',
    experience: 25,
    expertise: ['Precision Medicine', 'Genomic Profiling', 'Clinical Trials'],
    availability: availability,
    bio: 'Dr. Stark is a brilliant and innovative oncologist who leverages cutting-edge technology and genomic testing to create highly personalized cancer treatments.',
    reviews: 'Dr. Stark is a genius. His forward-thinking approach and access to clinical trials gave me hope when I had none.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-steve-rogers-82',
    name: 'Dr. Steve Rogers',
    specialization: 'oncology',
    experience: 20,
    expertise: ['Supportive Oncology', 'Palliative Care', 'Patient Advocacy'],
    availability: availability,
    bio: 'Dr. Rogers is a steadfast and compassionate oncologist who believes in treating the whole person, not just the disease. He is a tireless advocate for his patients.',
    reviews: 'Dr. Rogers has an old-school bedside manner that is so comforting. He is a true gentleman and a wonderful doctor.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-natasha-romanoff-83',
    name: 'Dr. Natasha Romanoff',
    specialization: 'oncology',
    experience: 15,
    expertise: ['Breast Cancer', 'Gynecologic Cancers'],
    availability: availability,
    bio: 'Dr. Romanoff is a highly skilled and strategic oncologist specializing in cancers that affect women. She is known for her precision and dedication.',
    reviews: 'Dr. Romanoff is focused and incredibly smart. I felt confident having her in my corner during my breast cancer treatment.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-bruce-banner-84',
    name: 'Dr. Bruce Banner',
    specialization: 'oncology',
    experience: 18,
    expertise: ['Radiation Oncology', 'Gamma Knife Radiosurgery'],
    availability: availability,
    bio: 'Dr. Banner is a renowned expert in radiation oncology, known for his calm demeanor and deep knowledge of advanced radiation techniques.',
    reviews: 'Dr. Banner is a brilliant radiation oncologist. He explained the complex process in a way I could understand and was very reassuring.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-thor-odinson-85',
    name: 'Dr. Thor Odinson',
    specialization: 'oncology',
    experience: 16,
    expertise: ['Sarcomas', 'Bone and Soft Tissue Tumors'],
    availability: availability,
    bio: 'Dr. Odinson is a powerful force against rare and difficult-to-treat sarcomas, bringing strength and optimism to his patients.',
    reviews: 'Dr. Odinson has a booming voice and a big heart. His confidence was contagious and helped me through a tough fight.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Hematology
  {
    id: 'dr-charles-xavier-86',
    name: 'Dr. Charles Xavier',
    specialization: 'hematology',
    experience: 30,
    expertise: ['Leukemia', 'Lymphoma', 'Myeloma'],
    availability: availability,
    bio: 'Dr. Xavier is a profound and empathetic hematologist-oncologist who guides patients through the complexities of blood cancers with wisdom and compassion.',
    reviews: 'Dr. Xavier has a calming presence and an incredible mind. He is a leader in his field for a reason.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-erik-lehnsherr-87',
    name: 'Dr. Erik Lehnsherr',
    specialization: 'hematology',
    experience: 28,
    expertise: ['Bone Marrow Transplant', 'Cellular Therapy'],
    availability: availability,
    bio: 'Dr. Lehnsherr is a powerful and intense specialist in bone marrow transplantation and cellular therapies, pushing the boundaries of treatment for hematologic malignancies.',
    reviews: 'Dr. Lehnsherr is a force of nature. His aggressive approach to treatment is exactly what I needed.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-jean-grey-88',
    name: 'Dr. Jean Grey',
    specialization: 'hematology',
    experience: 20,
    expertise: ['Benign Hematology', 'Anemia', 'Hemophilia'],
    availability: availability,
    bio: 'Dr. Grey is a deeply caring hematologist who manages a wide range of non-cancerous blood disorders with immense power and empathy.',
    reviews: 'Dr. Grey is an incredibly intuitive and caring doctor. She has helped me manage my chronic anemia with great success.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-scott-summers-89',
    name: 'Dr. Scott Summers',
    specialization: 'hematology',
    experience: 22,
    expertise: ['Clinical Trials', 'Myelodysplastic Syndromes (MDS)'],
    availability: availability,
    bio: 'Dr. Summers is a focused and disciplined leader in hematology, directing clinical trials and providing structured, effective care for patients with MDS.',
    reviews: 'Dr. Summers is a very focused and dedicated doctor. His leadership of the clinical trial I am on has been exemplary.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-ororo-munroe-90',
    name: 'Dr. Ororo Munroe',
    specialization: 'hematology',
    experience: 24,
    expertise: ['Sickle Cell Disease', 'Thalassemia'],
    availability: availability,
    bio: 'Dr. Munroe brings a regal and calming presence to the treatment of hemoglobinopathies like sickle cell disease, weathering the storm of the condition with her patients.',
    reviews: 'Dr. Munroe is a queen. Her wisdom and compassionate care for my daughter with sickle cell disease are a blessing.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Rheumatology
  {
    id: 'dr-diana-prince-91',
    name: 'Dr. Diana Prince',
    specialization: 'rheumatology',
    experience: 25,
    expertise: ['Rheumatoid Arthritis', 'Lupus', 'Vasculitis'],
    availability: availability,
    bio: 'Dr. Prince is a compassionate and wise rheumatologist who champions the cause of her patients, fighting for their health and well-being with truth and justice.',
    reviews: 'Dr. Prince is a true warrior. She has fought alongside me in my battle with lupus and I am so grateful for her.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-clark-kent-92',
    name: 'Dr. Clark Kent',
    specialization: 'rheumatology',
    experience: 22,
    expertise: ['Spondyloarthritis', 'Ankylosing Spondylitis'],
    availability: availability,
    bio: 'With a mild-mannered demeanor and super-human dedication, Dr. Kent provides hope and powerful treatments for patients with spondyloarthritis.',
    reviews: 'Dr. Kent is a kind and gentle soul, but he is a powerful advocate for his patients. He truly is a superman.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-bruce-wayne-93',
    name: 'Dr. Bruce Wayne',
    specialization: 'rheumatology',
    experience: 26,
    expertise: ['Scleroderma', 'Myositis', 'Rare Autoimmune Diseases'],
    availability: availability,
    bio: 'Dr. Wayne uses his vast resources and intellect to investigate and treat the rarest and most complex autoimmune diseases, often working behind the scenes for his patients.',
    reviews: 'Dr. Wayne is a mysterious but brilliant doctor. He was able to diagnose my rare condition when no one else could.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-barry-allen-94',
    name: 'Dr. Barry Allen',
    specialization: 'rheumatology',
    experience: 14,
    expertise: ['Gout', 'Pseudogout'],
    availability: availability,
    bio: 'Dr. Allen provides lightning-fast diagnosis and effective treatment for crystal-induced arthritis like gout, helping patients get back on their feet quickly.',
    reviews: 'My gout flare was gone in a flash thanks to Dr. Allen. He is incredibly fast and efficient.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-arthur-curry-95',
    name: 'Dr. Arthur Curry',
    specialization: 'rheumatology',
    experience: 16,
    expertise: ['Psoriatic Arthritis', 'Joint Injections'],
    availability: availability,
    bio: 'Dr. Curry is a powerful force in the treatment of psoriatic arthritis, using his command of advanced therapies and joint injections to help his patients.',
    reviews: 'Dr. Curry is a bit of a maverick but he is a great doctor. His joint injections are very effective.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Infectious Disease
  {
    id: 'dr-ripley-96',
    name: 'Dr. Ellen Ripley',
    specialization: 'infectious-disease',
    experience: 25,
    expertise: ['Emerging Infectious Diseases', 'Infection Control'],
    availability: availability,
    bio: 'A true survivor and expert in unknown pathogens, Dr. Ripley is the one you want on your side when facing a mysterious infection. She is a leader in infection control.',
    reviews: 'Dr. Ripley is tough, smart, and a survivor. She will not give up on you. She\'s the best there is.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-hicks-97',
    name: 'Dr. Dwayne Hicks',
    specialization: 'infectious-disease',
    experience: 20,
    expertise: ['Travel Medicine', 'Tropical Diseases'],
    availability: availability,
    bio: 'Dr. Hicks is a calm and steady hand in the face of tropical and travel-related diseases, providing practical advice and effective treatment.',
    reviews: 'Stay frosty with Dr. Hicks. He\'s a solid doctor who won\'t let you down when you\'re in a tight spot.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-vasquez-98',
    name: 'Dr. Jenette Vasquez',
    specialization: 'infectious-disease',
    experience: 18,
    expertise: ['Antimicrobial Stewardship', 'Resistant Bacteria'],
    availability: availability,
    bio: 'Dr. Vasquez takes an aggressive approach to fighting multi-drug resistant bacteria, leading her hospital\'s antimicrobial stewardship program.',
    reviews: 'You want Dr. Vasquez on that wall, you need her on that wall. She is tough as nails and a brilliant ID doc.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-bishop-99',
    name: 'Dr. Lance Bishop',
    specialization: 'infectious-disease',
    experience: 15,
    expertise: ['HIV/AIDS', 'Opportunistic Infections'],
    availability: availability,
    bio: 'Dr. Bishop provides highly analytical and compassionate care for patients with HIV, focusing on managing opportunistic infections.',
    reviews: 'Dr. Bishop is an incredibly intelligent and kind doctor. His analytical approach is very reassuring.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-newt-jorden-100',
    name: 'Dr. Rebecca "Newt" Jorden',
    specialization: 'infectious-disease',
    experience: 10,
    expertise: ['Pediatric Infectious Diseases', 'Vaccinology'],
    availability: availability,
    bio: 'Dr. Jorden specializes in infectious diseases in children, bringing a unique perspective and fierce dedication to her young patients.',
    reviews: 'Dr. Jorden is mostly quiet, but she is a brilliant doctor and wonderful with kids who have been through a lot.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Allergy
  {
    id: 'dr-peter-venkman-101',
    name: 'Dr. Peter Venkman',
    specialization: 'allergy',
    experience: 20,
    expertise: ['Food Allergies', 'Oral Immunotherapy'],
    availability: availability,
    bio: 'Dr. Venkman brings a unique and often humorous approach to allergy testing and treatment, but his results with oral immunotherapy are no joke.',
    reviews: 'He\'s a bit of a slimeball, but he\'s a great allergist. My son\'s peanut allergy is so much better thanks to him.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-egon-spengler-102',
    name: 'Dr. Egon Spengler',
    specialization: 'allergy',
    experience: 25,
    expertise: ['Environmental Allergies', 'Immunology Research'],
    availability: availability,
    bio: 'Dr. Spengler is a brilliant, research-focused allergist who uses data and science to tackle the most complex environmental allergies.',
    reviews: 'Dr. Spengler is very serious and scientific, but he is a genius. Don\'t cross the streams.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-ray-stantz-103',
    name: 'Dr. Ray Stantz',
    specialization: 'allergy',
    experience: 22,
    expertise: ['Asthma', 'Eosinophilic Esophagitis (EoE)'],
    availability: availability,
    bio: 'Dr. Stantz is the heart of the allergy department, bringing boundless enthusiasm and deep knowledge to the treatment of asthma and EoE.',
    reviews: 'Dr. Stantz is the most enthusiastic doctor I have ever met. His passion for his work is infectious!',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-winston-zeddemore-104',
    name: 'Dr. Winston Zeddemore',
    specialization: 'allergy',
    experience: 18,
    expertise: ['Drug Allergies', 'Desensitization'],
    availability: availability,
    bio: 'Dr. Zeddemore is the practical, reliable backbone of the allergy team, specializing in identifying and managing drug allergies.',
    reviews: 'If there\'s a steady hand you want, you call Dr. Zeddemore. He\'s a great, no-nonsense doctor.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-dana-barrett-105',
    name: 'Dr. Dana Barrett',
    specialization: 'allergy',
    experience: 15,
    expertise: ['Contact Dermatitis', 'Patch Testing'],
    availability: availability,
    bio: 'Dr. Barrett specializes in allergic skin conditions, meticulously performing patch tests to identify the specific cause of a patient\'s rash.',
    reviews: 'Dr. Barrett is a very classy and professional allergist. She was able to find the source of my contact dermatitis.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Geriatrics
  {
    id: 'dr-carl-fredricksen-106',
    name: 'Dr. Carl Fredricksen',
    specialization: 'geriatrics',
    experience: 45,
    expertise: ['Complex Geriatric Syndromes', 'End-of-Life Care'],
    availability: availability,
    bio: 'With a lifetime of experience, Dr. Fredricksen provides curmudgeonly yet deeply compassionate care for the elderly, focusing on quality of life.',
    reviews: 'He seems grumpy at first, but he\'s a wonderful doctor with a heart of gold. Adventure is out there!',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-russell-kim-107',
    name: 'Dr. Russell Kim',
    specialization: 'geriatrics',
    experience: 10,
    expertise: ['Geriatric Assessment', 'Falls Prevention'],
    availability: availability,
    bio: 'Dr. Kim brings youthful energy and a focus on preventive care to his geriatric practice, helping his patients stay safe and active.',
    reviews: 'Dr. Kim is so enthusiastic and positive. He\'s been a great help in keeping my mother safe and independent.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-ellie-fredricksen-108',
    name: 'Dr. Ellie Fredricksen',
    specialization: 'geriatrics',
    experience: 40,
    expertise: ['Palliative Care', 'Memory Care'],
    availability: availability,
    bio: 'Dr. Fredricksen is remembered for her adventurous spirit and her pioneering work in palliative and memory care, a legacy that continues to inspire.',
    reviews: 'The clinic she founded is a testament to her spirit. The care is wonderful.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-dug-jones-109',
    name: 'Dr. Dug Jones',
    specialization: 'geriatrics',
    experience: 12,
    expertise: ['Polypharmacy', 'Medication Management'],
    availability: availability,
    bio: 'Dr. Jones is a friendly and loyal geriatrician who specializes in untangling complex medication lists to prevent adverse drug events in his patients.',
    reviews: 'I have just met him and I love him. He is a very good doctor and helped sort out all of my grandmother\'s pills.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-kevin-nguyen-110',
    name: 'Dr. Kevin Nguyen',
    specialization: 'geriatrics',
    experience: 15,
    expertise: ['Rehabilitation', 'Mobility'],
    availability: availability,
    bio: 'Dr. Nguyen focuses on geriatric rehabilitation, helping older adults regain function and mobility after an illness or injury.',
    reviews: 'Dr. Nguyen is a rare and wonderful doctor. His rehab program was a great help.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Pathology
  {
    id: 'dr-gil-grissom-111',
    name: 'Dr. Gil Grissom',
    specialization: 'pathology',
    experience: 25,
    expertise: ['Forensic Pathology', 'Molecular Diagnostics'],
    availability: availability,
    bio: 'Dr. Grissom is a brilliant and methodical pathologist who finds the answers that others miss by following the evidence, no matter how small.',
    reviews: 'Dr. Grissom is a genius. His attention to detail is second to none. The evidence never lies.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-sara-sidle-112',
    name: 'Dr. Sara Sidle',
    specialization: 'pathology',
    experience: 20,
    expertise: ['Surgical Pathology', 'Cytopathology'],
    availability: availability,
    bio: 'Dr. Sidle is a compassionate and dedicated pathologist who is driven by a quest for justice and accuracy in every diagnosis.',
    reviews: 'Dr. Sidle is a tireless worker and a brilliant pathologist. She will fight for the right answer.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-catherine-willows-113',
    name: 'Dr. Catherine Willows',
    specialization: 'pathology',
    experience: 22,
    expertise: ['Hematopathology', 'Blood Banking'],
    availability: availability,
    bio: 'Dr. Willows is a sharp and resourceful pathologist specializing in blood disorders and transfusion medicine.',
    reviews: 'Dr. Willows knows her stuff. She\'s a smart and savvy pathologist.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-nick-stokes-114',
    name: 'Dr. Nick Stokes',
    specialization: 'pathology',
    experience: 18,
    expertise: ['Dermatopathology', 'Soft Tissue Pathology'],
    availability: availability,
    bio: 'Dr. Stokes is an empathetic and personable pathologist with an expertise in diagnosing skin and soft tissue diseases.',
    reviews: 'Dr. Stokes is a great guy and a great pathologist. He\'s the kind of doctor you can trust.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-greg-sanders-115',
    name: 'Dr. Greg Sanders',
    specialization: 'pathology',
    experience: 15,
    expertise: ['Clinical Chemistry', 'Toxicology'],
    availability: availability,
    bio: 'Once a lab tech, Dr. Sanders is now a brilliant pathologist specializing in clinical chemistry and toxicology, bringing a unique energy to the lab.',
    reviews: 'Dr. Sanders is a super smart and quirky pathologist. He brings a fresh perspective.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Radiology
  {
    id: 'dr-leonard-mccoy-116',
    name: 'Dr. Leonard McCoy',
    specialization: 'radiology',
    experience: 30,
    expertise: ['Diagnostic Radiology', 'Interventional Radiology'],
    availability: availability,
    bio: 'With old-school charm and a sharp eye, Dr. McCoy can diagnose anything with a scan. "I\'m a doctor, not a magician!" is his common refrain.',
    reviews: 'He\'s a bit grumpy, but he\'s the best radiologist in the quadrant. He can see right through you.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-christine-chapel-117',
    name: 'Dr. Christine Chapel',
    specialization: 'radiology',
    experience: 20,
    expertise: ['Neuroradiology', 'Head and Neck Imaging'],
    availability: availability,
    bio: 'Dr. Chapel is a dedicated and highly skilled neuroradiologist who brings a deep sense of compassion to her work.',
    reviews: 'Dr. Chapel is a brilliant and caring radiologist. Her reads are always incredibly detailed.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-beverly-crusher-118',
    name: 'Dr. Beverly Crusher',
    specialization: 'radiology',
    experience: 25,
    expertise: ['Pediatric Radiology', 'Ultrasound'],
    availability: availability,
    bio: 'Dr. Crusher is a top-tier radiologist specializing in pediatric imaging. She has a commanding presence and a gentle touch with her young patients.',
    reviews: 'Dr. Crusher is a wonderful pediatric radiologist. She made my child\'s ultrasound a comfortable experience.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-julian-bashir-119',
    name: 'Dr. Julian Bashir',
    specialization: 'radiology',
    experience: 15,
    expertise: ['Musculoskeletal Radiology', 'Sports Imaging'],
    availability: availability,
    bio: 'Dr. Bashir is a young, brilliant radiologist with a passion for musculoskeletal and sports imaging, providing reads for top athletes.',
    reviews: 'Dr. Bashir is a charming and incredibly smart doctor. His MSK reads are top-notch.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-kathryn-janeway-120',
    name: 'Dr. Kathryn Janeway',
    specialization: 'radiology',
    experience: 28,
    expertise: ['Nuclear Medicine', 'PET/CT'],
    availability: availability,
    bio: 'Dr. Janeway is a decisive and resourceful leader in the field of nuclear medicine, guiding her department through the most complex cases with a steady hand.',
    reviews: 'Dr. Janeway is a phenomenal radiologist. She\'s a strong leader and her department runs on coffee and excellence.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Anesthesiology
  {
    id: 'dr-jed-bartlet-121',
    name: 'Dr. Jed Bartlet',
    specialization: 'anesthesiology',
    experience: 35,
    expertise: ['Cardiac Anesthesia', 'Regional Anesthesia'],
    availability: availability,
    bio: 'Dr. Bartlet is a brilliant and commanding presence in the operating room, known for his intellect and ability to handle the most complex cardiac cases.',
    reviews: 'Having Dr. Bartlet as my anesthesiologist was like having the president in the room. I knew I was in good hands.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-leo-mcgarry-122',
    name: 'Dr. Leo McGarry',
    specialization: 'anesthesiology',
    experience: 40,
    expertise: ['General Anesthesia', 'Crisis Management'],
    availability: availability,
    bio: 'Dr. McGarry is a seasoned veteran of the OR, a steady hand who has seen it all and can manage any crisis with calm authority.',
    reviews: 'Dr. McGarry is an old pro. He has a way of making you feel like everything is under control, because with him, it is.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-josh-lyman-123',
    name: 'Dr. Josh Lyman',
    specialization: 'anesthesiology',
    experience: 20,
    expertise: ['Neuroanesthesia', 'Trauma Anesthesia'],
    availability: availability,
    bio: 'Dr. Lyman is a high-energy, brilliant anesthesiologist who thrives in high-stakes situations like neurosurgery and trauma.',
    reviews: 'Dr. Lyman is intense and brilliant. He walks and talks fast, but he\'s exactly who you want in an emergency.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-toby-ziegler-124',
    name: 'Dr. Toby Ziegler',
    specialization: 'anesthesiology',
    experience: 22,
    expertise: ['Obstetric Anesthesia', 'Pain Management'],
    availability: availability,
    bio: 'With a world-weary sigh but a deep-seated dedication, Dr. Ziegler provides exceptional care for mothers in labor and patients with chronic pain.',
    reviews: 'He can be a bit gloomy, but Dr. Ziegler is a fantastic anesthesiologist. My epidural was perfect.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-cj-cregg-125',
    name: 'Dr. C.J. Cregg',
    specialization: 'anesthesiology',
    experience: 21,
    expertise: ['Pediatric Anesthesia', 'Patient Communication'],
    availability: availability,
    bio: 'Dr. Cregg is a masterful communicator, able to put even the most anxious parents and children at ease before surgery. She is a top pediatric anesthesiologist.',
    reviews: 'Dr. Cregg was amazing. She explained everything so clearly and was wonderful with my daughter. She even knew The Jackal.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Physical Therapy
  {
    id: 'dr-rocky-balboa-126',
    name: 'Dr. Rocky Balboa, PT, DPT',
    specialization: 'physical-therapy',
    experience: 30,
    expertise: ['Sports Rehabilitation', 'Strength and Conditioning'],
    availability: availability,
    bio: 'Dr. Balboa is an underdog champion of physical therapy, known for his unconventional training methods and ability to get his clients back in the fight.',
    reviews: 'He ain\'t about pain, he\'s about results. Dr. Balboa got me back on my feet. Yo, Adrian, I did it!',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-apollo-creed-127',
    name: 'Dr. Apollo Creed, PT, DPT',
    specialization: 'physical-therapy',
    experience: 28,
    expertise: ['Performance Enhancement', 'Post-Surgical Rehab'],
    availability: availability,
    bio: 'The Master of Disaster in rehab, Dr. Creed brings flair and championship-level expertise to get his clients performing at their best.',
    reviews: 'There is no tomorrow! Dr. Creed\'s PT is intense, but he\'s the best. He has the eye of the tiger.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-mickey-goldmill-128',
    name: 'Dr. Mickey Goldmill, PT, DPT',
    specialization: 'physical-therapy',
    experience: 50,
    expertise: ['Geriatric Physical Therapy', 'Balance Training'],
    availability: availability,
    bio: 'A gravelly-voiced veteran, Dr. Goldmill is a tough but caring physical therapist who pushes his clients to be "greasy, fast lightning".',
    reviews: 'He\'s a crusty old guy, but he knows his stuff. He had me eating lightning and crapping thunder!',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-adrian-pennino-129',
    name: 'Dr. Adrian Pennino, PT, DPT',
    specialization: 'physical-therapy',
    experience: 25,
    expertise: ['Neurological Rehabilitation', 'Stroke Recovery'],
    availability: availability,
    bio: 'Dr. Pennino is the quiet, supportive heart of the clinic, specializing in helping patients recover from neurological conditions with patience and grace.',
    reviews: 'Dr. Adrian is the kindest, most patient physical therapist. She was my rock during my stroke recovery.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-ivan-drago-130',
    name: 'Dr. Ivan Drago, PT, DPT',
    specialization: 'physical-therapy',
    experience: 22,
    expertise: ['Advanced Modalities', 'Biomechanics'],
    availability: availability,
    bio: 'Dr. Drago utilizes cutting-edge technology and a data-driven, biomechanical approach to physical therapy. His methods are intense and effective.',
    reviews: 'His approach is very scientific. If he gets hurt, he gets hurt. I must break you... of your bad habits. He is very effective.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Occupational Therapy
  {
    id: 'dr-mary-poppins-131',
    name: 'Dr. Mary Poppins, OTD',
    specialization: 'occupational-therapy',
    experience: 30,
    expertise: ['Pediatric Occupational Therapy', 'Activities of Daily Living (ADLs)'],
    availability: availability,
    bio: 'Dr. Poppins makes therapy a delightful game, helping children master daily tasks with a spoonful of sugar. She is practically perfect in every way.',
    reviews: 'She turned cleaning up into a game! My child has never been more independent. She is magical.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-bert-dawes-132',
    name: 'Dr. Bert Dawes, OTD',
    specialization: 'occupational-therapy',
    experience: 28,
    expertise: ['Hand Therapy', 'Fine Motor Skills'],
    availability: availability,
    bio: 'Dr. Dawes is a cheerful and creative hand therapist who helps patients of all ages regain the use of their hands with a bit of whimsy.',
    reviews: 'Dr. Bert is a charming therapist. My hand function is so much better, and I had fun doing the exercises.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-george-banks-133',
    name: 'Dr. George Banks, OTD',
    specialization: 'occupational-therapy',
    experience: 25,
    expertise: ['Workplace Ergonomics', 'Return-to-Work Programs'],
    availability: availability,
    bio: 'Dr. Banks is a precise and orderly occupational therapist who specializes in workplace ergonomics and helping individuals return to work after an injury.',
    reviews: 'Dr. Banks is very professional and his advice on my office setup was invaluable.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-winifred-banks-134',
    name: 'Dr. Winifred Banks, OTD',
    specialization: 'occupational-therapy',
    experience: 22,
    expertise: ['Community Re-integration', 'Cognitive Rehabilitation'],
    availability: availability,
    bio: 'Dr. Banks is a passionate advocate for her patients, helping them re-engage with their communities and overcome cognitive challenges after an injury.',
    reviews: 'Dr. Banks is a wonderful and caring therapist. She helped my husband regain his confidence and get back out into the world.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-jane-banks-135',
    name: 'Dr. Jane Banks, OTD',
    specialization: 'occupational-therapy',
    experience: 10,
    expertise: ['Early Intervention', 'Sensory Integration'],
    availability: availability,
    bio: 'Following in her family\'s footsteps, Dr. Banks specializes in early intervention for children with sensory processing disorders.',
    reviews: 'Dr. Jane has a special connection with children. Her sensory gym is amazing and has helped my son so much.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Podiatry
  {
    id: 'dr-frodo-baggins-136',
    name: 'Dr. Frodo Baggins, DPM',
    specialization: 'podiatry',
    experience: 20,
    expertise: ['Wound Care', 'Diabetic Foot Care'],
    availability: availability,
    bio: 'Dr. Baggins undertakes the great journey of diabetic foot care and complex wound healing, showing immense resilience and compassion for his patients.',
    reviews: 'He carries a heavy burden, but he is a wonderful podiatrist. He helped save my foot.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-samwise-gamgee-137',
    name: 'Dr. Samwise Gamgee, DPM',
    specialization: 'podiatry',
    experience: 18,
    expertise: ['General Podiatry', 'Orthotics'],
    availability: availability,
    bio: 'Dr. Gamgee is a loyal and dependable podiatrist, always there to support his patients with custom orthotics and sound foot care advice.',
    reviews: 'I can\'t say enough good things about Dr. Sam. He is the most loyal and caring doctor you will ever meet. His orthotics are perfect.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-gandalf-grey-138',
    name: 'Dr. Gandalf Grey, DPM',
    specialization: 'podiatry',
    experience: 50,
    expertise: ['Surgical Podiatry', 'Reconstructive Foot Surgery'],
    availability: availability,
    bio: 'A wise and powerful surgical podiatrist, Dr. Grey performs complex reconstructive foot surgery with precision and foresight.',
    reviews: 'He is a wizard with a scalpel. My foot surgery was a complete success. He arrives precisely when he means to.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-aragorn-strider-139',
    name: 'Dr. Aragorn Strider, DPM',
    specialization: 'podiatry',
    experience: 30,
    expertise: ['Sports Podiatry', 'Heel Pain'],
    availability: availability,
    bio: 'Dr. Strider is a leader in sports podiatry, treating athletes with heel pain and other common sports-related foot and ankle injuries.',
    reviews: 'Dr. Strider is a true king of podiatry. He got me back to running in no time.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-legolas-greenleaf-140',
    name: 'Dr. Legolas Greenleaf, DPM',
    specialization: 'podiatry',
    experience: 25,
    expertise: ['Minimalist Footwear Counseling', 'Gait Analysis'],
    availability: availability,
    bio: 'With keen eyes and a light step, Dr. Greenleaf specializes in gait analysis and advises patients on proper footwear.',
    reviews: 'Dr. Greenleaf has an amazing eye for detail. His gait analysis was incredibly helpful.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Chiropractic
  {
    id: 'dr-indiana-jones-141',
    name: 'Dr. Indiana Jones, DC',
    specialization: 'chiropractic',
    experience: 25,
    expertise: ['Spinal Decompression', 'Whiplash Injuries'],
    availability: availability,
    bio: 'Dr. Jones is an adventurous chiropractor who specializes in treating whiplash and other spine-related injuries from daring escapades.',
    reviews: 'It belongs in a museum! And so does my back pain, thanks to Dr. Jones. He\'s a great chiropractor.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-marion-ravenwood-142',
    name: 'Dr. Marion Ravenwood, DC',
    specialization: 'chiropractic',
    experience: 22,
    expertise: ['Prenatal and Pediatric Chiropractic', 'Webster Technique'],
    availability: availability,
    bio: 'Dr. Ravenwood is a tough and resilient chiropractor who is also incredibly caring, specializing in chiropractic care for mothers and children.',
    reviews: 'Dr. Marion is fantastic. She is strong and caring and has helped me so much during my pregnancy.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-sallah-faisel-143',
    name: 'Dr. Sallah Faisel, DC',
    specialization: 'chiropractic',
    experience: 30,
    expertise: ['Diversified Technique', 'Family Chiropractic'],
    availability: availability,
    bio: 'A jovial and well-connected family chiropractor, Dr. Sallah is known for his skill with the diversified adjustment technique and his hearty laugh.',
    reviews: 'Bad dates? No, great adjustments! Dr. Sallah is a wonderful chiropractor for the whole family.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-henry-jones-sr-144',
    name: 'Dr. Henry Jones, Sr., DC',
    specialization: 'chiropractic',
    experience: 40,
    expertise: ['Geriatric Chiropractic', 'Arthritis Care'],
    availability: availability,
    bio: 'A scholarly and sometimes cantankerous chiropractor, Dr. Jones, Sr. specializes in providing relief for seniors with arthritis and other chronic conditions.',
    reviews: 'He chose... wisely. Dr. Jones, Sr. is a very knowledgeable chiropractor, even if he is a bit of a bookworm.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-short-round-wang-145',
    name: 'Dr. Short Round Wang, DC',
    specialization: 'chiropractic',
    experience: 15,
    expertise: ['Active Release Technique (ART)', 'Sports Injuries'],
    availability: availability,
    bio: 'Dr. "Shorty" Wang is a quick-witted and resourceful chiropractor specializing in ART for sports-related injuries. No time for love, Dr. Jones!',
    reviews: 'Hold on lady, we going for a ride! Dr. Shorty is a great chiro, very energetic and effective.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Nutrition
  {
    id: 'dr-remy-gusteua-146',
    name: 'Dr. Remy Gusteau, RD',
    specialization: 'nutrition',
    experience: 15,
    expertise: ['Culinary Nutrition', 'Weight Management'],
    availability: availability,
    bio: 'A little chef with a big talent, Dr. Remy believes that good food and good health can go hand-in-hand. He creates delicious and nutritious meal plans.',
    reviews: 'Anyone can cook... and eat healthy! Dr. Remy is a genius. His meal plans are amazing.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-alfredo-linguini-147',
    name: 'Dr. Alfredo Linguini, RD',
    specialization: 'nutrition',
    experience: 10,
    expertise: ['Sports Nutrition', 'Meal Prep'],
    availability: availability,
    bio: 'A bit clumsy but with a lot of heart, Dr. Linguini works with Dr. Remy to help athletes and busy people with practical sports nutrition and meal prep.',
    reviews: 'He\'s a bit awkward, but he\'s very sweet and helpful. He and his little chef are a great team.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-colette-tatou-148',
    name: 'Dr. Colette Tatou, RD',
    specialization: 'nutrition',
    experience: 18,
    expertise: ['Gastrointestinal Nutrition', 'FODMAP Diet'],
    availability: availability,
    bio: 'Dr. Tatou is a tough, disciplined, and highly skilled dietitian specializing in nutritional therapies for GI conditions like IBS.',
    reviews: 'She is intense, but she is the best. She taught me how to cook and how to manage my diet. How can I be meek when I am your inspiration?',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-anton-ego-149',
    name: 'Dr. Anton Ego, RD',
    specialization: 'nutrition',
    experience: 40,
    expertise: ['Food Critic', 'Mindful Eating'],
    availability: availability,
    bio: 'Once a harsh critic, Dr. Ego now specializes in mindful eating and helping people rediscover a healthy and joyful relationship with food.',
    reviews: 'His perspective is unique. He has helped me appreciate my food in a new way, and in doing so, eat healthier.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-emile-gusteua-150',
    name: 'Dr. Emile Gusteau, RD',
    specialization: 'nutrition',
    experience: 12,
    expertise: ['Family Nutrition', 'Picky Eaters'],
    availability: availability,
    bio: 'Dr. Emile is a down-to-earth dietitian who helps families navigate the challenges of picky eaters and develop healthy eating habits together.',
    reviews: 'He\'s very relatable and gave us some great, practical tips for our picky eater. He understands that you can\'t be too picky.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Acupuncture
  {
    id: 'dr-po-ping-151',
    name: 'Dr. Po Ping, L.Ac',
    specialization: 'acupuncture',
    experience: 15,
    expertise: ['Pain Management', 'Stress Relief'],
    availability: availability,
    bio: 'An unlikely master, Dr. Po uses acupuncture to help patients find their inner peace and relieve pain, proving there is no secret ingredient.',
    reviews: 'Skadoosh! My back pain was gone. Dr. Po is awesome and surprisingly gentle with the needles.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-shifu-lee-152',
    name: 'Dr. Shifu Lee, L.Ac',
    specialization: 'acupuncture',
    experience: 40,
    expertise: ['Traditional Chinese Medicine (TCM)', 'Herbal Medicine'],
    availability: availability,
    bio: 'A wise and sometimes stern master, Dr. Shifu is an expert in all aspects of TCM, using acupuncture and herbs to bring balance to his patients.',
    reviews: 'He is a true master. His knowledge of acupuncture and herbs is incredible. I have found inner peace.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-tigress-chen-153',
    name: 'Dr. Tigress Chen, L.Ac',
    specialization: 'acupuncture',
    experience: 20,
    expertise: ['Sports Acupuncture', 'Injury Recovery'],
    availability: availability,
    bio: 'Dr. Tigress is a strong and focused acupuncturist who helps athletes recover from injuries and improve their performance.',
    reviews: 'She is very serious and professional. Her treatments are powerful and effective.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-oogway-wong-154',
    name: 'Dr. Oogway Wong, L.Ac',
    specialization: 'acupuncture',
    experience: 100,
    expertise: ['Esoteric Acupuncture', 'Spiritual Wellness'],
    availability: availability,
    bio: 'A legendary and wise master, Dr. Oogway provides acupuncture that treats the body, mind, and spirit, helping patients find their own path.',
    reviews: 'Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present. My session with Dr. Oogway was profound.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-mantis-lin-155',
    name: 'Dr. Mantis Lin, L.Ac',
    specialization: 'acupuncture',
    experience: 18,
    expertise: ['Trigger Point Acupuncture', 'Orthopedic Acupuncture'],
    availability: availability,
    bio: 'Small but mighty, Dr. Mantis is an expert in trigger point acupuncture, precisely targeting knots and tension to provide immense relief.',
    reviews: 'Don\'t let his size fool you. Dr. Mantis gives some of the most powerful and precise treatments I have ever had.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Holistic Medicine
  {
    id: 'dr-aang-korra-156',
    name: 'Dr. Aang Korra',
    specialization: 'holistic-medicine',
    experience: 20,
    expertise: ['Energy Healing', 'Mind-Body Medicine'],
    availability: availability,
    bio: 'As a master of all elements of health, Dr. Korra provides holistic care that balances the physical, mental, and spiritual states of her patients.',
    reviews: 'Dr. Korra helped me find balance in my life. Her approach is truly holistic and powerful.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-katara-sato-157',
    name: 'Dr. Katara Sato',
    specialization: 'holistic-medicine',
    experience: 22,
    expertise: ['Herbal Medicine', 'Hydrotherapy'],
    availability: availability,
    bio: 'Dr. Sato is a master healer, using the power of water and plants to provide compassionate and effective holistic treatments.',
    reviews: 'Dr. Katara is a truly gifted healer. Her compassion and knowledge are a beacon of hope.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-zuko-ozai-158',
    name: 'Dr. Zuko Ozai',
    specialization: 'holistic-medicine',
    experience: 18,
    expertise: ['Acupressure', 'Heat Therapy'],
    availability: availability,
    bio: 'Having found his own path to balance, Dr. Zuko now helps others do the same, using acupressure and heat therapies to restore honor and health.',
    reviews: 'He can be a bit intense and awkward, but he has a good heart. His treatments have helped me find my own balance.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-toph-beifong-159',
    name: 'Dr. Toph Beifong',
    specialization: 'holistic-medicine',
    experience: 19,
    expertise: ['Reflexology', 'Grounding Techniques'],
    availability: availability,
    bio: 'The greatest earth-based healer in the world, Dr. Beifong uses reflexology and grounding techniques to provide powerful, no-nonsense treatments.',
    reviews: 'She doesn\'t sugarcoat anything, but she is a phenomenal healer. She can feel the imbalances in your body.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-iroh-jeong-160',
    name: 'Dr. Iroh Jeong',
    specialization: 'holistic-medicine',
    experience: 45,
    expertise: ['Naturopathic Medicine', 'Tea Therapy', 'Life Coaching'],
    availability: availability,
    bio: 'A wise and gentle soul, Dr. Iroh helps his patients find health and wisdom through naturopathic medicine, life advice, and a good cup of tea.',
    reviews: 'Sharing tea with a fascinating stranger is one of life\'s true delights. Dr. Iroh is a wise and wonderful healer.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Sports Medicine
  {
    id: 'dr-michael-jordan-161',
    name: 'Dr. Michael Jordan',
    specialization: 'sports-medicine',
    experience: 25,
    expertise: ['Performance Medicine', 'Orthopedic Surgery'],
    availability: availability,
    bio: 'Considered the greatest in his field, Dr. Jordan provides elite-level sports medicine care, pushing his patients to be the best they can be.',
    reviews: 'He is the G.O.A.T. of sports medicine. His standards are high, but he gets results.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-lebron-james-162',
    name: 'Dr. LeBron James',
    specialization: 'sports-medicine',
    experience: 20,
    expertise: ['Longevity in Sports', 'Rehabilitation'],
    availability: availability,
    bio: 'Dr. James is a king of sports medicine, specializing in helping athletes maintain peak performance and longevity in their careers.',
    reviews: 'Dr. James is a brilliant and strategic doctor. His rehab protocols are second to none.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-serena-williams-163',
    name: 'Dr. Serena Williams',
    specialization: 'sports-medicine',
    experience: 22,
    expertise: ['Tennis Elbow', 'Rotator Cuff Injuries'],
    availability: availability,
    bio: 'A powerful and dominant force, Dr. Williams is an expert in treating injuries common to racquet sports, serving up aces in patient care.',
    reviews: 'Dr. Williams is a queen. She is a fierce and compassionate doctor who helped me get back on the court.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-tom-brady-164',
    name: 'Dr. Tom Brady',
    specialization: 'sports-medicine',
    experience: 24,
    expertise: ['Concussion Management', 'Cognitive Training'],
    availability: availability,
    bio: 'Dr. Brady is a master of the mental and physical aspects of sports, specializing in concussion management and cognitive training for athletes.',
    reviews: 'Dr. Brady is a legend. His pliability method and his attention to detail are incredible.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-megan-rapinoe-165',
    name: 'Dr. Megan Rapinoe',
    specialization: 'sports-medicine',
    experience: 18,
    expertise: ['ACL/MCL Injuries', 'Advocacy for Athlete Health'],
    availability: availability,
    bio: 'A vocal and passionate advocate, Dr. Rapinoe is an expert in knee injuries and a champion for the overall health and well-being of all athletes.',
    reviews: 'Dr. Rapinoe is a phenomenal doctor and a true leader. She is a powerful advocate for her patients.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Sleep Medicine
  {
    id: 'dr-edward-norton-166',
    name: 'Dr. Edward Norton',
    specialization: 'sleep-medicine',
    experience: 15,
    expertise: ['Insomnia', 'Cognitive Behavioral Therapy for Insomnia (CBT-I)'],
    availability: availability,
    bio: 'Dr. Norton leads a dual life as a top-tier sleep specialist, helping patients battle insomnia with structured therapies like CBT-I.',
    reviews: 'The first rule of my sleep clinic is you do not talk about my sleep clinic. He helped me get my life back from insomnia.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-tyler-durden-167',
    name: 'Dr. Tyler Durden',
    specialization: 'sleep-medicine',
    experience: 16,
    expertise: ['Parasomnias', 'Sleepwalking', 'Night Terrors'],
    availability: availability,
    bio: 'Dr. Durden takes a radical, anarchic approach to sleep medicine, specializing in the most unusual and disruptive parasomnias.',
    reviews: 'His methods are unconventional, but they work. He is a very charismatic and persuasive doctor.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-marla-singer-168',
    name: 'Dr. Marla Singer',
    specialization: 'sleep-medicine',
    experience: 14,
    expertise: ['Narcolepsy', 'Hypersomnia'],
    availability: availability,
    bio: 'A fellow traveler in the world of sleep disorders, Dr. Singer brings a raw and authentic perspective to treating narcolepsy and other disorders of excessive sleepiness.',
    reviews: 'She gets it. She understands what it\'s like. She\'s a great doctor for people who have been through it all.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-robert-paulson-169',
    name: 'Dr. Robert Paulson',
    specialization: 'sleep-medicine',
    experience: 20,
    expertise: ['Sleep Apnea', 'CPAP Titration'],
    availability: availability,
    bio: 'A large man with a gentle heart, Dr. Paulson is a dedicated specialist in diagnosing and managing sleep apnea, ensuring his patients get the best possible treatment.',
    reviews: 'His name is Dr. Robert Paulson. He was a great sleep doctor and a great man.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-angel-face-170',
    name: 'Dr. Angel Face',
    specialization: 'sleep-medicine',
    experience: 10,
    expertise: ['Circadian Rhythm Disorders', 'Shift Work Sleep Disorder'],
    availability: availability,
    bio: 'Dr. "Angel Face" is a beautiful and brilliant specialist in circadian rhythm disorders, helping shift workers and jet-setters get their sleep schedules back on track.',
    reviews: 'He\'s almost too pretty to be a doctor, but he\'s very smart and helped me with my shift work sleep issues.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Cosmetic Surgery
  {
    id: 'dr-christian-troy-171',
    name: 'Dr. Christian Troy',
    specialization: 'cosmetic-surgery',
    experience: 20,
    expertise: ['Breast Augmentation', 'Liposuction', 'Facelifts'],
    availability: availability,
    bio: 'A brilliant, arrogant, and sought-after plastic surgeon, Dr. Troy can make any patient beautiful, but his personal life is often a mess.',
    reviews: 'He\'s a genius with a scalpel, a true artist. Don\'t ask about his personal life, just let him work his magic.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-sean-mcnamara-172',
    name: 'Dr. Sean McNamara',
    specialization: 'cosmetic-surgery',
    experience: 21,
    expertise: ['Reconstructive Surgery', 'Rhinoplasty'],
    availability: availability,
    bio: 'The conscience of McNamara/Troy, Dr. McNamara is a deeply moral and skilled surgeon who often struggles with the ethical dilemmas of his profession.',
    reviews: 'Dr. McNamara is the heart of the practice. He is a wonderful, caring surgeon who does beautiful work.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-liz-cruz-173',
    name: 'Dr. Liz Cruz',
    specialization: 'cosmetic-surgery',
    experience: 18,
    expertise: ['Anesthesiology', 'Patient Advocate'],
    availability: availability,
    bio: 'The sharp-witted and pragmatic anesthesiologist, Dr. Cruz is the indispensable anchor of the surgical team, always ready with a sarcastic comment and a life-saving intervention.',
    reviews: 'Dr. Cruz is hilarious and brilliant. I felt completely safe with her in the operating room.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-julia-mcnamara-174',
    name: 'Dr. Julia McNamara',
    specialization: 'cosmetic-surgery',
    experience: 15,
    expertise: ['Spa Medicine', 'Non-Invasive Procedures'],
    availability: availability,
    bio: 'After years of being a patient, Dr. Julia now runs a successful medical spa, offering non-invasive treatments and a holistic approach to beauty.',
    reviews: 'Julia is wonderful. Her spa is an oasis and her knowledge of skincare is fantastic.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-quentin-costa-175',
    name: 'Dr. Quentin Costa',
    specialization: 'cosmetic-surgery',
    experience: 16,
    expertise: ['Cutting-Edge Techniques', 'Experimental Procedures'],
    availability: availability,
    bio: 'A mysterious and talented surgeon, Dr. Costa is known for his use of experimental techniques and his ability to achieve results that other surgeons can only dream of.',
    reviews: 'He is a bit of a mad scientist, but Dr. Costa is a genius. The results are unbelievable.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Bariatric Medicine
  {
    id: 'dr-chris-traeger-176',
    name: 'Dr. Chris Traeger',
    specialization: 'bariatric-medicine',
    experience: 18,
    expertise: ['Weight Loss Management', 'Nutrition', 'Positive Psychology'],
    availability: availability,
    bio: 'Dr. Traeger is LITERALLY the most positive and enthusiastic bariatric physician you will ever meet. He is dedicated to helping his patients achieve their health goals.',
    reviews: 'I have stopped having feelings. No, wait. I am feeling ALL the feelings. Dr. Traeger is the best!',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-ann-perkins-177',
    name: 'Dr. Ann Perkins',
    specialization: 'bariatric-medicine',
    experience: 16,
    expertise: ['Medical Weight Loss', 'Diabetes Prevention'],
    availability: availability,
    bio: 'A beautiful, tropical fish and a brilliant doctor, Dr. Perkins provides compassionate and evidence-based medical weight loss programs.',
    reviews: 'Ann is a wonderful, caring doctor. She is so smart and beautiful. A poetic, noble land-mermaid.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-jerry-gergich-178',
    name: 'Dr. Jerry Gergich',
    specialization: 'bariatric-medicine',
    experience: 30,
    expertise: ['Support Groups', 'Patient Encouragement'],
    availability: availability,
    bio: 'A kind-hearted and often clumsy man, Dr. Gergich runs the most supportive and encouraging weight loss support groups in the state.',
    reviews: 'Oh, geez. Dr. Gergich is just the sweetest man. He tries his best and his support group is wonderful.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-donna-meagle-179',
    name: 'Dr. Donna Meagle',
    specialization: 'bariatric-medicine',
    experience: 15,
    expertise: ['Behavioral Modification', 'Lifestyle Coaching'],
    availability: availability,
    bio: 'Dr. Meagle helps her patients treat themselves to a healthier lifestyle with a no-nonsense, confident approach to behavioral modification.',
    reviews: 'Treat yo self to an appointment with Dr. Meagle. She is a queen and will get you right.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-tom-haverford-180',
    name: 'Dr. Tom Haverford',
    specialization: 'bariatric-medicine',
    experience: 12,
    expertise: ['Medical Technology', 'App-Based Coaching'],
    availability: availability,
    bio: 'Dr. Haverford brings entrepreneurial flair to bariatric medicine, developing apps and using the latest tech to help his patients succeed.',
    reviews: 'His ideas are a little out there, but his app is actually really helpful. Zerts are what I call desserts.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Pain Management
  {
    id: 'dr-gregory-house-181',
    name: 'Dr. Gregory House',
    specialization: 'pain-management',
    experience: 25,
    expertise: ['Complex Regional Pain Syndrome', 'Neuropathic Pain'],
    availability: availability,
    bio: 'A brilliant, misanthropic, and unconventional doctor who also happens to be a patient himself. Dr. House is a genius at diagnosing and treating complex pain syndromes.',
    reviews: 'He\'s a jerk, but he\'s a genius. He figured out my pain when no one else could. Everybody lies.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-james-wilson-182',
    name: 'Dr. James Wilson',
    specialization: 'pain-management',
    experience: 22,
    expertise: ['Oncologic Pain', 'Palliative Care'],
    availability: availability,
    bio: 'The compassionate heart of the pain clinic, Dr. Wilson specializes in managing pain for cancer patients, providing comfort and care in difficult times.',
    reviews: 'Dr. Wilson is the kindest, most compassionate doctor I have ever met. He is a true friend to his patients.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-lisa-cuddy-183',
    name: 'Dr. Lisa Cuddy',
    specialization: 'pain-management',
    experience: 24,
    expertise: ['Interventional Pain Management', 'Spinal Cord Stimulators'],
    availability: availability,
    bio: 'The brilliant and long-suffering administrator who is also a top-notch interventional pain specialist. Dr. Cuddy provides advanced, minimally invasive pain treatments.',
    reviews: 'Dr. Cuddy is a brilliant doctor and a strong leader. Her clinic is the best, despite the one rogue doctor.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-eric-foreman-184',
    name: 'Dr. Eric Foreman',
    specialization: 'pain-management',
    experience: 18,
    expertise: ['Neuromodulation', 'Headache Management'],
    availability: availability,
    bio: 'A sharp and ambitious doctor, Dr. Foreman specializes in neuromodulation and advanced treatments for chronic headaches and migraines.',
    reviews: 'Dr. Foreman is a very smart and serious doctor. He is very knowledgeable about the latest treatments.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-allison-cameron-185',
    name: 'Dr. Allison Cameron',
    specialization: 'pain-management',
    experience: 16,
    expertise: ['Fibromyalgia', 'Myofascial Pain'],
    availability: availability,
    bio: 'An empathetic and idealistic doctor, Dr. Cameron specializes in treating widespread pain conditions like fibromyalgia, with a focus on patient-centered care.',
    reviews: 'Dr. Cameron is so compassionate. She really listens and understands what it\'s like to live with chronic pain.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Audiology
  {
    id: 'dr-deanna-troi-186',
    name: 'Dr. Deanna Troi, Au.D.',
    specialization: 'audiology',
    experience: 20,
    expertise: ['Hearing Aids', 'Tinnitus Management', 'Counseling'],
    availability: availability,
    bio: 'An empathetic audiologist, Dr. Troi can sense her patients\' frustration with hearing loss and provides expert counseling and hearing aid fitting.',
    reviews: 'Dr. Troi is so understanding. She really felt my pain and helped me choose the perfect hearing aids.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-william-riker-187',
    name: 'Dr. William Riker, Au.D.',
    specialization: 'audiology',
    experience: 22,
    expertise: ['Vestibular Testing', 'Dizziness and Balance Disorders'],
    availability: availability,
    bio: 'A confident and commanding audiologist, Dr. Riker takes charge of complex vestibular testing to diagnose and treat dizziness and balance problems.',
    reviews: 'Dr. Riker is a confident and skilled audiologist. He got to the bottom of my dizzy spells.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-data-soong-188',
    name: 'Dr. Data Soong, Au.D.',
    specialization: 'audiology',
    experience: 18,
    expertise: ['Auditory Processing Disorder (APD)', 'Advanced Diagnostics'],
    availability: availability,
    bio: 'A fully functional and highly analytical audiologist, Dr. Soong uses advanced diagnostics to understand and treat auditory processing disorders with unmatched precision.',
    reviews: 'Dr. Data\'s testing is incredibly thorough. He is a fascinating and brilliant audiologist.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-geordi-la-forge-189',
    name: 'Dr. Geordi La Forge, Au.D.',
    specialization: 'audiology',
    experience: 21,
    expertise: ['Cochlear Implants', 'Assistive Listening Devices'],
    availability: availability,
    bio: 'A miracle worker with technology, Dr. La Forge is an expert in cochlear implants and other assistive listening devices, engineering solutions for the most profound hearing loss.',
    reviews: 'Dr. La Forge is a genius with technology. He can make anything work. My cochlear implant is amazing thanks to him.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-jean-luc-picard-190',
    name: 'Dr. Jean-Luc Picard, Au.D.',
    specialization: 'audiology',
    experience: 35,
    expertise: ['Hearing Conservation', 'Noise-Induced Hearing Loss'],
    availability: availability,
    bio: 'A diplomatic and commanding leader in audiology, Dr. Picard specializes in hearing conservation programs and advocating for policies to prevent noise-induced hearing loss.',
    reviews: 'Dr. Picard is a true leader. His passion for hearing conservation is inspiring. He made it so.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Speech Therapy
  {
    id: 'dr-lionel-logue-191',
    name: 'Dr. Lionel Logue, SLP',
    specialization: 'speech-therapy',
    experience: 30,
    expertise: ['Stuttering', 'Fluency Disorders'],
    availability: availability,
    bio: 'An unconventional but brilliant speech therapist, Dr. Logue uses unique methods to help his patients, including royalty, find their voice.',
    reviews: 'He has a unique approach, but he is a wonderful therapist. He gave me back my voice and my confidence.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-king-george-vi-192',
    name: 'Dr. King George VI, SLP',
    specialization: 'speech-therapy',
    experience: 25,
    expertise: ['Public Speaking', 'Voice Coaching'],
    availability: availability,
    bio: 'Having overcome his own speech impediment, Dr. "Bertie" is a uniquely empathetic and effective voice coach for public speakers.',
    reviews: 'He understands what it\'s like. He is a patient and inspiring therapist.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-eliza-doolittle-193',
    name: 'Dr. Eliza Doolittle, SLP',
    specialization: 'speech-therapy',
    experience: 20,
    expertise: ['Accent Modification', 'Articulation'],
    availability: availability,
    bio: 'Dr. Doolittle transformed her own speech and now helps others with accent modification and clear articulation, proving that with hard work, anything is possible.',
    reviews: 'The rain in Spain stays mainly in the plain! She is a wonderful therapist who helped me so much.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-henry-higgins-194',
    name: 'Dr. Henry Higgins, SLP',
    specialization: 'speech-therapy',
    experience: 35,
    expertise: ['Phonetics', 'Voice Disorders'],
    availability: availability,
    bio: 'A brilliant, if sometimes arrogant, phoneticist, Dr. Higgins is a master at diagnosing and treating voice disorders.',
    reviews: 'He\'s a bit of a brute, but by Jove, I think he\'s got it. He is a genius with phonetics.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-colonel-pickering-195',
    name: 'Dr. Colonel Pickering, SLP',
    specialization: 'speech-therapy',
    experience: 40,
    expertise: ['Aphasia', 'Post-Stroke Speech Therapy'],
    availability: availability,
    bio: 'A true gentleman and a kind-hearted therapist, Dr. Pickering specializes in helping patients regain their speech after a stroke.',
    reviews: 'Dr. Pickering is a wonderful and kind man. He was so patient and encouraging during my husband\'s recovery.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Genetics
  {
    id: 'dr-ellie-arroway-196',
    name: 'Dr. Ellie Arroway',
    specialization: 'genetics',
    experience: 20,
    expertise: ['Genetic Counseling', 'Hereditary Cancer Syndromes'],
    availability: availability,
    bio: 'A brilliant and driven geneticist, Dr. Arroway searches for answers in the human genome, providing counseling for patients with hereditary cancer risks.',
    reviews: 'Dr. Arroway is incredibly smart and dedicated. She takes the time to explain complex genetic information in an understandable way.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-palmer-joss-197',
    name: 'Dr. Palmer Joss',
    specialization: 'genetics',
    experience: 22,
    expertise: ['Theology and Genetics', 'Ethical Counseling'],
    availability: availability,
    bio: 'Dr. Joss brings a unique philosophical and ethical perspective to genetic counseling, helping patients navigate the difficult questions that arise from genetic testing.',
    reviews: 'He asks the big questions but in a very gentle and helpful way. His perspective was invaluable.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-david-drumlin-198',
    name: 'Dr. David Drumlin',
    specialization: 'genetics',
    experience: 25,
    expertise: ['Genetic Research', 'Clinical Trials'],
    availability: availability,
    bio: 'A highly ambitious and competitive genetic researcher, Dr. Drumlin is at the forefront of developing new genetic therapies and running clinical trials.',
    reviews: 'He is very ambitious, but he is a leader in his field. His lab is top-notch.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-kent-clark-199',
    name: 'Dr. Kent Clark',
    specialization: 'genetics',
    experience: 18,
    expertise: ['Cardiovascular Genetics', 'Inherited Heart Conditions'],
    availability: availability,
    bio: 'A keen-eyed geneticist, Dr. Clark specializes in identifying and managing inherited cardiovascular conditions.',
    reviews: 'Dr. Clark is a very sharp and observant doctor. He was able to identify a genetic condition that runs in my family.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-s-r-hadden-200',
    name: 'Dr. S.R. Hadden',
    specialization: 'genetics',
    experience: 40,
    expertise: ['Genomic Sequencing', 'Bioinformatics'],
    availability: availability,
    bio: 'A reclusive and enigmatic billionaire who is also a genius in genomics and bioinformatics, Dr. Hadden funds and directs the most cutting-edge genetic research from his private facilities.',
    reviews: 'You don\'t really "meet" with Dr. Hadden, but his lab provides the most advanced genomic sequencing in the world. Wanna take a ride?',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Emergency Medicine
  {
    id: 'dr-john-carter-201',
    name: 'Dr. John Carter',
    specialization: 'emergency-medicine',
    experience: 20,
    expertise: ['Trauma', 'Critical Care'],
    availability: availability,
    bio: 'Starting as a student and growing into a leader, Dr. Carter is the heart of the ER, known for his compassion and skill in high-pressure situations.',
    reviews: 'Dr. Carter is a fantastic ER doctor. He is calm under pressure and incredibly caring.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-doug-ross-202',
    name: 'Dr. Doug Ross',
    specialization: 'emergency-medicine',
    experience: 22,
    expertise: ['Pediatric Emergency Medicine', 'Patient Advocacy'],
    availability: availability,
    bio: 'A charming and rebellious pediatrician in the ER, Dr. Ross is a fierce advocate for his young patients, often breaking the rules to provide the best care.',
    reviews: 'He\'s a bit of a maverick, but he is a phenomenal doctor, especially with kids. He will fight for his patients.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-mark-greene-203',
    name: 'Dr. Mark Greene',
    specialization: 'emergency-medicine',
    experience: 25,
    expertise: ['Emergency Department Management', 'Diagnostics'],
    availability: availability,
    bio: 'The steady and reliable leader of the ER, Dr. Greene was a master diagnostician and a compassionate physician who held the department together.',
    reviews: 'Dr. Greene was the best. A true leader and a kind soul. The ER isn\'t the same without him.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-kerry-weaver-204',
    name: 'Dr. Kerry Weaver',
    specialization: 'emergency-medicine',
    experience: 28,
    expertise: ['Administration', 'Policy'],
    availability: availability,
    bio: 'A tough, ambitious, and highly efficient administrator, Dr. Weaver makes the hard decisions to keep the ER running, often at personal cost.',
    reviews: 'She\'s tough and all about policy, but she is a great doctor and knows how to run an ER.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-susan-lewis-205',
    name: 'Dr. Susan Lewis',
    specialization: 'emergency-medicine',
    experience: 19,
    expertise: ['General Emergency Medicine', 'Mentorship'],
    availability: availability,
    bio: 'A highly competent and relatable ER physician, Dr. Lewis is a great clinician and a supportive mentor to younger doctors.',
    reviews: 'Dr. Lewis is a fantastic, down-to-earth doctor. She is smart, funny, and great in a crisis.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Neurosurgery
  {
    id: 'dr-derek-shepherd-206',
    name: 'Dr. Derek Shepherd',
    specialization: 'neurosurgery',
    experience: 20,
    expertise: ['Brain Tumors', 'Complex Spinal Surgery'],
    availability: availability,
    bio: 'Known as "McDreamy," Dr. Shepherd is a world-renowned neurosurgeon with movie-star good looks and incredible skill in the operating room.',
    reviews: 'It\'s a beautiful day to save lives. He is a phenomenal surgeon and, yes, he is very dreamy.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-meredith-grey-207',
    name: 'Dr. Meredith Grey',
    specialization: 'neurosurgery',
    experience: 18,
    expertise: ['General Surgery', 'Abdominal Wall Reconstruction'],
    availability: availability,
    bio: 'Dark and twisty but a brilliant surgeon, Dr. Grey has overcome immense challenges to become a leader in her field. She is now also a skilled neurosurgeon.',
    reviews: 'She is an incredible surgeon. She\'s been through a lot, which makes her a very compassionate doctor.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-cristina-yang-208',
    name: 'Dr. Cristina Yang',
    specialization: 'neurosurgery',
    experience: 19,
    expertise: ['Cardiothoracic Surgery', 'Minimally Invasive Techniques'],
    availability: availability,
    bio: 'A fiercely competitive and brilliant cardiothoracic surgeon who is now branching into complex neuro-cardiac cases. Dr. Yang is a surgical shark.',
    reviews: 'She is a cardio god. A brilliant, no-nonsense surgeon. You are not her person, the patient is.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-amelia-shepherd-209',
    name: 'Dr. Amelia Shepherd',
    specialization: 'neurosurgery',
    experience: 16,
    expertise: ['Pediatric Neurosurgery', 'Neuro-oncology'],
    availability: availability,
    bio: 'Dr. Amelia Shepherd is a brilliant, passionate, and sometimes impulsive neurosurgeon who tackles the most impossible tumors with fearless determination.',
    reviews: 'She is a superhero. A true warrior who will take on any challenge. Her energy is infectious.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-preston-burke-210',
    name: 'Dr. Preston Burke',
    specialization: 'neurosurgery',
    experience: 25,
    expertise: ['Cardiothoracic Surgery', 'Surgical Innovation'],
    availability: availability,
    bio: 'A precise, demanding, and highly ambitious surgeon, Dr. Burke is a master of the cardiothoracic world who collaborates on complex brain and heart procedures.',
    reviews: 'He is a brilliant technician. His precision in the OR is legendary. A true master of his craft.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Cardiothoracic Surgery
  {
    id: 'dr-stephen-strange-211',
    name: 'Dr. Stephen Strange',
    specialization: 'cardiothoracic-surgery',
    experience: 20,
    expertise: ['Complex Aortic Surgery', 'Minimally Invasive Cardiac Surgery'],
    availability: availability,
    bio: 'Once a brilliant and arrogant surgeon, a journey of discovery has made Dr. Strange a more holistic, but no less skilled, master of cardiothoracic surgery.',
    reviews: 'His hands are steady, his knowledge is vast. His methods may be... strange, but the results are magical.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-christine-palmer-212',
    name: 'Dr. Christine Palmer',
    specialization: 'cardiothoracic-surgery',
    experience: 18,
    expertise: ['Trauma Surgery', 'Emergency Thoracic Surgery'],
    availability: availability,
    bio: 'A steady hand and a compassionate heart in the ER and the OR, Dr. Palmer is an expert in managing and operating on severe chest trauma.',
    reviews: 'Dr. Palmer is a fantastic surgeon and a wonderful person. She is the anchor in a storm.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-nicodemus-west-213',
    name: 'Dr. Nicodemus West',
    specialization: 'cardiothoracic-surgery',
    experience: 19,
    expertise: ['Coronary Artery Bypass Grafting (CABG)', 'General Thoracic Surgery'],
    availability: availability,
    bio: 'A talented and competitive surgeon, Dr. West is a skilled practitioner of traditional cardiothoracic procedures like CABG.',
    reviews: 'Dr. West is a very skilled and confident surgeon. He does excellent work.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-the-ancient-one-214',
    name: 'Dr. The Ancient One',
    specialization: 'cardiothoracic-surgery',
    experience: 100,
    expertise: ['Metaphysical Surgery', 'Energy-Based Interventions'],
    availability: availability,
    bio: 'The Sorcerer Supreme of surgery, The Ancient One has a perspective on healing that transcends the physical, performing interventions that are truly mind-bending.',
    reviews: 'It wasn\'t just a surgery, it was a spiritual experience. She opens your mind as well as your chest.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-wong-lee-215',
    name: 'Dr. Wong Lee',
    specialization: 'cardiothoracic-surgery',
    experience: 25,
    expertise: ['Surgical Assisting', 'Librarian of Medical Knowledge'],
    availability: availability,
    bio: 'The stoic and knowledgeable keeper of the surgical library, Dr. Wong is also a master surgical assistant, ensuring every procedure goes by the book.',
    reviews: 'Dr. Wong is a man of few words, but his knowledge is encyclopedic and his presence in the OR is incredibly reassuring.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Vascular Surgery
  {
    id: 'dr-han-solo-216',
    name: 'Dr. Han Solo',
    specialization: 'vascular-surgery',
    experience: 20,
    expertise: ['Endovascular Aneurysm Repair (EVAR)', 'Carotid Endarterectomy'],
    availability: availability,
    bio: 'A maverick surgeon who\'s fast with a scalpel and good in a tight spot, Dr. Solo is a top-tier endovascular surgeon, though he might have a scruffy-looking demeanor.',
    reviews: 'He\'s a scoundrel, but he\'s the best. He completed my surgery in less than twelve parsecs. I know.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-leia-organa-217',
    name: 'Dr. Leia Organa',
    specialization: 'vascular-surgery',
    experience: 22,
    expertise: ['Aortic Dissection', 'Peripheral Artery Disease (PAD)'],
    availability: availability,
    bio: 'A natural leader and brilliant surgeon, Dr. Organa commands the operating room with grace and authority, specializing in complex aortic cases.',
    reviews: 'She is a princess and a general in the OR. A compassionate, brilliant, and fearless surgeon.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-luke-skywalker-218',
    name: 'Dr. Luke Skywalker',
    specialization: 'vascular-surgery',
    experience: 18,
    expertise: ['Limb Salvage', 'Diabetic Foot Ulcers'],
    availability: availability,
    bio: 'Bringing new hope to patients at risk of amputation, Dr. Skywalker is a gifted surgeon specializing in limb salvage procedures.',
    reviews: 'He is an amazing surgeon. I was about to lose my foot, but he saved it. The Force is strong with this one.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-chewbacca-wookiee-219',
    name: 'Dr. Chewbacca Wookiee',
    specialization: 'vascular-surgery',
    experience: 25,
    expertise: ['Surgical Assisting', 'Interventional Support'],
    availability: availability,
    bio: 'The strong, silent, and incredibly loyal first assistant, Dr. Chewbacca is the best co-pilot a surgeon could ask for in a complex vascular case.',
    reviews: 'He doesn\'t say much, but he\'s the best assistant there is. You can hear his passion in his roars. Let the Wookiee win.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-obi-wan-kenobi-220',
    name: 'Dr. Obi-Wan Kenobi',
    specialization: 'vascular-surgery',
    experience: 40,
    expertise: ['Open Aortic Surgery', 'Thoracic Outlet Syndrome'],
    availability: availability,
    bio: 'A wise and elegant surgeon from a more civilized age, Dr. Kenobi is a master of classic, open vascular procedures.',
    reviews: 'He is a true master. His surgical technique is an art form. This is the surgeon you\'re looking for.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Hepatology
  {
    id: 'dr-don-draper-221',
    name: 'Dr. Don Draper',
    specialization: 'hepatology',
    experience: 20,
    expertise: ['Alcoholic Liver Disease', 'Cirrhosis'],
    availability: availability,
    bio: 'A brilliant, enigmatic, and complex man, Dr. Draper is a leading expert in alcoholic liver disease, with a profound, if unspoken, understanding of the condition.',
    reviews: 'He is a mysterious and brilliant doctor. He doesn\'t say much about himself, but he knows everything about liver disease.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-peggy-olson-222',
    name: 'Dr. Peggy Olson',
    specialization: 'hepatology',
    experience: 15,
    expertise: ['Hepatitis C', 'Clinical Trials'],
    availability: availability,
    bio: 'A trailblazing and creative hepatologist, Dr. Olson is a leader in developing and running clinical trials for new Hepatitis C treatments.',
    reviews: 'She is a brilliant and determined doctor. A true pioneer. She gave me a basket of kisses.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-roger-sterling-223',
    name: 'Dr. Roger Sterling',
    specialization: 'hepatology',
    experience: 30,
    expertise: ['Liver Transplantation', 'Patient Counseling'],
    availability: availability,
    bio: 'A charming and witty veteran, Dr. Sterling provides pre- and post-transplant care with a dose of humor and hard-won wisdom.',
    reviews: 'He is a silver-tongued devil, but a fantastic doctor. He helped me through the transplant process with a laugh and a martini.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-joan-holloway-224',
    name: 'Dr. Joan Holloway',
    specialization: 'hepatology',
    experience: 18,
    expertise: ['Non-alcoholic Fatty Liver Disease (NAFLD)', 'Practice Management'],
    availability: availability,
    bio: 'A savvy and commanding presence, Dr. Holloway is an expert in NAFLD and also masterfully manages the operations of the entire hepatology clinic.',
    reviews: 'She is a queen. A brilliant doctor and an organizational genius. The clinic runs like a well-oiled machine because of her.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-pete-campbell-225',
    name: 'Dr. Pete Campbell',
    specialization: 'hepatology',
    experience: 14,
    expertise: ['Hepatocellular Carcinoma', 'Interventional Radiology Collaboration'],
    availability: availability,
    bio: 'An ambitious and sometimes slippery hepatologist, Dr. Campbell is nonetheless skilled in managing liver cancer and working with interventional radiology for treatment.',
    reviews: 'He can be a grimy little pimp, but he is a good doctor who will get you the treatment you need. A thing like that!',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Toxicology
  {
    id: 'dr-sherlock-holmes-226',
    name: 'Dr. Sherlock Holmes',
    specialization: 'toxicology',
    experience: 25,
    expertise: ['Forensic Toxicology', 'Unusual Poisons'],
    availability: availability,
    bio: 'The world\'s only consulting toxicologist, Dr. Holmes can deduce the poison from the slightest of clues. His methods are unorthodox but his results are elementary.',
    reviews: 'He is a brilliant, if eccentric, toxicologist. He saw everything. The game is afoot!',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-john-watson-227',
    name: 'Dr. John Watson',
    specialization: 'toxicology',
    experience: 20,
    expertise: ['Clinical Toxicology', 'Overdose Management'],
    availability: availability,
    bio: 'The steady and reliable partner, Dr. Watson is an excellent clinical toxicologist who manages overdoses and poisonings in the hospital with a soldier\'s calm.',
    reviews: 'Dr. Watson is a fantastic doctor. A good man and a steady hand in a crisis.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-irene-adler-228',
    name: 'Dr. Irene Adler',
    specialization: 'toxicology',
    experience: 18,
    expertise: ['Pharmacology', 'Adverse Drug Reactions'],
    availability: availability,
    bio: 'A brilliant and cunning pharmacologist and toxicologist, Dr. Adler is an expert in adverse drug reactions and interactions. She is always one step ahead.',
    reviews: 'She is a brilliant and formidable woman. She outsmarted everyone. To me, she is always The Woman.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-moriarty-229',
    name: 'Dr. James Moriarty',
    specialization: 'toxicology',
    experience: 26,
    expertise: ['Designer Drugs', 'Novel Psychoactive Substances'],
    availability: availability,
    bio: 'The Napoleon of Crime is also the Napoleon of Toxicology, a consulting criminal toxicologist with a network of labs developing novel substances.',
    reviews: 'He is a genius, but a dangerous one. Every fairy tale needs a good old-fashioned villain.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-mycroft-holmes-230',
    name: 'Dr. Mycroft Holmes',
    specialization: 'toxicology',
    experience: 30,
    expertise: ['Government Policy', 'Public Health Toxicology'],
    availability: availability,
    bio: 'The elder brother and the smarter one, Dr. Mycroft Holmes occupies a unique position in government, shaping public health policy on toxicology.',
    reviews: 'He is the British government. A brilliant mind who sees the bigger picture of public health.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Preventive Medicine
  {
    id: 'dr-captain-planet-231',
    name: 'Dr. Captain Planet',
    specialization: 'preventive-medicine',
    experience: 30,
    expertise: ['Environmental Health', 'Public Health Campaigns'],
    availability: availability,
    bio: 'A superhero of public health, Dr. Planet champions environmental health and leads large-scale campaigns to prevent illness and pollution.',
    reviews: 'He\'s our hero, gonna take pollution down to zero! A fantastic advocate for preventive health.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-kwame-gyasi-232',
    name: 'Dr. Kwame Gyasi',
    specialization: 'preventive-medicine',
    experience: 20,
    expertise: ['Geographic Medicine', 'Soil and Water Contamination'],
    availability: availability,
    bio: 'With the power of Earth, Dr. Gyasi investigates and mitigates health risks from soil and water contamination.',
    reviews: 'Dr. Gyasi is a solid, down-to-earth doctor who is passionate about environmental justice.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-wheeler-johnson-233',
    name: 'Dr. Wheeler Johnson',
    specialization: 'preventive-medicine',
    experience: 18,
    expertise: ['Occupational Health', 'Air Quality'],
    availability: availability,
    bio: 'Dr. Johnson is a fiery advocate for occupational health and safety, focusing on the prevention of diseases caused by poor air quality.',
    reviews: 'He is a hot-head, but he will fight for you. A great doctor for worker safety.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-linka-sobolev-234',
    name: 'Dr. Linka Sobolev',
    specialization: 'preventive-medicine',
    experience: 22,
    expertise: ['Aerobiology', 'Climate Change and Health'],
    availability: availability,
    bio: 'With the power of Wind, Dr. Sobolev studies the airborne transmission of diseases and the impact of climate change on public health.',
    reviews: 'Dr. Sobolev is a breath of fresh air. She is a brilliant and logical scientist.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-gi-wong-235',
    name: 'Dr. Gi Wong',
    specialization: 'preventive-medicine',
    experience: 19,
    expertise: ['Global Health', 'Health Equity'],
    availability: availability,
    bio: 'With the power of Heart, Dr. Gi is a compassionate physician focused on global health and ensuring health equity for all populations.',
    reviews: 'Dr. Gi has so much heart. She is a wonderful and caring doctor who truly believes in health for all.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Proctology
  {
    id: 'dr-george-costanza-236',
    name: 'Dr. George Costanza',
    specialization: 'proctology',
    experience: 18,
    expertise: ['Colonoscopy', 'Hemorrhoid Treatment'],
    availability: availability,
    bio: 'A neurotic but surprisingly skilled proctologist, Dr. Costanza is an expert in colonoscopies, though he may have a story for every situation.',
    reviews: 'He was in the pool! A bit of a sad sack, but he\'s a great doctor. The millionaire. The architect. The proctologist.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-jerry-seinfeld-237',
    name: 'Dr. Jerry Seinfeld',
    specialization: 'proctology',
    experience: 20,
    expertise: ['Observational Proctology', 'Gastrointestinal Humor'],
    availability: availability,
    bio: 'A keen observer of the human condition, Dr. Seinfeld brings a unique, humorous perspective to the world of proctology.',
    reviews: 'What\'s the deal with colonoscopies? He\'s a very funny doctor, which makes an awkward situation much better.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-elaine-benes-238',
    name: 'Dr. Elaine Benes',
    specialization: 'proctology',
    experience: 19,
    expertise: ['Female Pelvic Medicine', 'Anorectal Disorders'],
    availability: availability,
    bio: 'A smart, witty, and sometimes cynical proctologist, Dr. Benes is an expert in female anorectal disorders, handling her cases with a unique lack of grace but a lot of skill.',
    reviews: 'She has zero grace, but she is a fantastic doctor. Very smart and to the point. Get out!',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-cosmo-kramer-239',
    name: 'Dr. Cosmo Kramer',
    specialization: 'proctology',
    experience: 22,
    expertise: ['Unconventional Treatments', 'The Kramer Method'],
    availability: availability,
    bio: 'A lanky, wild-haired doctor of proctology, Dr. Kramer is known for his unorthodox methods and "levels" of treatment.',
    reviews: 'He\'s a loathsome, offensive brute, yet I can\'t look away. His methods are crazy, but they work. Giddyup.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-newman-smith-240',
    name: 'Dr. Newman Smith',
    specialization: 'proctology',
    experience: 21,
    expertise: ['Mail-in Stool Tests', 'Preventive Screening'],
    availability: availability,
    bio: 'An expert in preventive screening, Dr. Newman oversees the vast network of mail-in testing with a villainous laugh and surprising efficiency.',
    reviews: 'Hello, Newman. The mail-in kit was surprisingly easy. He\'s a very efficient, if somewhat evil, doctor.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Andrology
  {
    id: 'dr-james-bond-241',
    name: 'Dr. James Bond',
    specialization: 'andrology',
    experience: 25,
    expertise: ['Erectile Dysfunction', 'Testosterone Replacement Therapy'],
    availability: availability,
    bio: 'Suave, sophisticated, and an expert in men\'s health, Dr. Bond provides discreet and effective treatments for a range of andrological issues.',
    reviews: 'Shaken, not stirred. Dr. Bond is the best. A true professional with a license to heal.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-m-mansfield-242',
    name: 'Dr. M. Mansfield',
    specialization: 'andrology',
    experience: 35,
    expertise: ['Male Infertility', 'Sperm Banking'],
    availability: availability,
    bio: 'The brilliant and commanding head of the department, Dr. M is a leading expert in male infertility, running her clinic with precision and authority.',
    reviews: 'She is a tough but fair leader. The clinic is the best in the world because of her.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-q-boothroyd-243',
    name: 'Dr. Q. Boothroyd',
    specialization: 'andrology',
    experience: 20,
    expertise: ['Penile Implants', 'Medical Devices'],
    availability: availability,
    bio: 'A young genius with a knack for gadgets, Dr. Q is the leading expert in penile implants and other medical devices for andrology.',
    reviews: 'He\'s a genius with technology. The device works perfectly. Now pay attention, 007.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-moneypenny-eve-244',
    name: 'Dr. Moneypenny Eve',
    specialization: 'andrology',
    experience: 18,
    expertise: ['Patient Coordination', 'Sexual Health Counseling'],
    availability: availability,
    bio: 'The sharp, witty, and highly capable patient coordinator, Dr. Eve also provides expert counseling on sexual health.',
    reviews: 'She\'s brilliant and beautiful. A great counselor who can handle even the most difficult patients.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-felix-leiter-245',
    name: 'Dr. Felix Leiter',
    specialization: 'andrology',
    experience: 22,
    expertise: ['Prostate Health', 'Urologic Oncology'],
    availability: availability,
    bio: 'A reliable and resourceful colleague from across the pond, Dr. Leiter is an expert in prostate health and collaborates on urologic cancer cases.',
    reviews: 'A brother from another mother. Dr. Leiter is a great doctor and a good friend to have on your side.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  // Robotic Surgery
  {
    id: 'dr-optimus-prime-246',
    name: 'Dr. Optimus Prime',
    specialization: 'robotic-surgery',
    experience: 30,
    expertise: ['General Robotic Surgery', 'Leadership in Surgical Technology'],
    availability: availability,
    bio: 'A noble and heroic leader, Dr. Prime is a master of the surgical robot, leading his team with wisdom and compassion.',
    reviews: 'He is a true leader. A powerful and gentle surgeon. The surgery transformed me.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-megatron-galvatron-247',
    name: 'Dr. Megatron Galvatron',
    specialization: 'robotic-surgery',
    experience: 32,
    expertise: ['Complex Reconstructive Robotic Surgery', 'Aggressive Tumor Resection'],
    availability: availability,
    bio: 'A powerful and tyrannical surgeon, Dr. Megatron is unmatched in his aggressive and highly effective approach to complex robotic surgeries.',
    reviews: 'He is a tyrant in the OR, but his skill is undeniable. He is a master of deception and surgery.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-bumblebee-sam-248',
    name: 'Dr. Bumblebee Sam',
    specialization: 'robotic-surgery',
    experience: 18,
    expertise: ['Pediatric Robotic Surgery', 'Patient Communication'],
    availability: availability,
    bio: 'A brave and loyal surgeon, Dr. Bumblebee is fantastic with pediatric patients, using his unique communication skills to make them feel safe and cared for.',
    reviews: 'He is the coolest doctor ever. He played music for me and made me feel brave.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-starscream-alexis-249',
    name: 'Dr. Starscream Alexis',
    specialization: 'robotic-surgery',
    experience: 28,
    expertise: ['Robotic Thoracic Surgery', 'Surgical Planning'],
    availability: availability,
    bio: 'An ambitious and treacherous but brilliant surgeon, Dr. Starscream is a master of robotic thoracic surgery and meticulous surgical planning.',
    reviews: 'He is a backstabbing snake, but his surgical plans are flawless. You can\'t argue with his results.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
  {
    id: 'dr-ratchet-smith-250',
    name: 'Dr. Ratchet Smith',
    specialization: 'robotic-surgery',
    experience: 35,
    expertise: ['Robotic Repair and Maintenance', 'Trauma Surgery'],
    availability: availability,
    bio: 'The brilliant and cranky old medic, Dr. Ratchet can fix any robot and any patient. He is the chief medical officer and chief engineer of the OR.',
    reviews: 'I needed that! He\'s a bit of a grump, but he\'s the best there is at fixing things, robotic or human.',
    imageUrl: 'https://placehold.co/150x150.png'
  },
];

export const products: Product[] = [
  { id: 'prod-001', name: 'Panadol Tablets 500mg', price: 2.50, description: 'For fast and effective relief of pain and fever.', imageUrl: 'https://placehold.co/400x400.png', category: 'medicine' },
  { id: 'prod-002', name: 'Cetaphil Gentle Skin Cleanser', price: 15.75, description: 'Mild, non-irritating formula for all skin types.', imageUrl: 'https://placehold.co/400x400.png', category: 'cosmetic' },
  { id: 'prod-003', name: 'Vitamin C 1000mg Effervescent Tablets', price: 8.99, description: 'Boosts immune system and provides antioxidant support.', imageUrl: 'https://placehold.co/400x400.png', category: 'wellness' },
  { id: 'prod-004', name: 'Johnson\'s Baby Shampoo', price: 6.50, description: 'No More Tears formula is gentle to the eyes.', imageUrl: 'https://placehold.co/400x400.png', category: 'baby-care' },
  { id: 'prod-005', name: 'Nurofen Ibuprofen 200mg', price: 4.20, description: 'Provides relief from pain, inflammation and fever.', imageUrl: 'https://placehold.co/400x400.png', category: 'medicine' },
  { id: 'prod-006', name: 'La Roche-Posay Anthelios 50+ Sunscreen', price: 25.00, description: 'High-protection sunscreen for sensitive skin.', imageUrl: 'https://placehold.co/400x400.png', category: 'cosmetic' },
  { id: 'prod-007', name: 'Omega-3 Fish Oil 1200mg', price: 18.50, description: 'Supports heart, brain and eye health.', imageUrl: 'https://placehold.co/400x400.png', category: 'wellness' },
  { id: 'prod-008', name: 'Pampers Premium Care Diapers', price: 22.00, description: 'Our softest comfort and best skin protection.', imageUrl: 'https://placehold.co/400x400.png', category: 'baby-care' },
  { id: 'prod-009', name: 'Zyrtec Antihistamine Tablets', price: 12.99, description: '24-hour relief from allergy symptoms.', imageUrl: 'https://placehold.co/400x400.png', category: 'medicine' },
  { id: 'prod-010', name: 'The Ordinary Niacinamide 10% + Zinc 1%', price: 9.80, description: 'High-strength vitamin and mineral blemish formula.', imageUrl: 'https://placehold.co/400x400.png', category: 'cosmetic' },
  { id: 'prod-011', name: 'Gaviscon Double Action Liquid', price: 7.80, description: 'Fast relief from heartburn and indigestion.', imageUrl: 'https://placehold.co/400x400.png', category: 'medicine' },
  { id: 'prod-012', name: 'Probiotic 30 Billion CFU', price: 24.00, description: 'Supports digestive health and immune function.', imageUrl: 'https://placehold.co/400x400.png', category: 'wellness' },
  { id: 'prod-013', name: 'Sudocrem Healing Cream', price: 5.50, description: 'Soothes and heals irritated skin.', imageUrl: 'https://placehold.co/400x400.png', category: 'baby-care' },
  { id: 'prod-014', name: 'Voltaren Emulgel 1%', price: 11.25, description: 'For targeted relief of pain and inflammation.', imageUrl: 'https://placehold.co/400x400.png', category: 'medicine' },
  { id: 'prod-015', name: 'CeraVe Moisturizing Cream', price: 18.00, description: 'For dry to very dry skin, with ceramides.', imageUrl: 'https://placehold.co/400x400.png', category: 'cosmetic' },
  { id: 'prod-016', name: 'Strepsils Honey & Lemon Lozenges', price: 3.50, description: 'Soothes sore throats.', imageUrl: 'https://placehold.co/400x400.png', category: 'medicine' },
  { id: 'prod-017', name: 'Melatonin 5mg Timed Release', price: 10.50, description: 'Helps you fall asleep faster and stay asleep longer.', imageUrl: 'https://placehold.co/400x400.png', category: 'wellness' },
  { id: 'prod-018', name: 'Aveeno Baby Daily Moisture Lotion', price: 9.75, description: 'Natural oatmeal formula for baby\'s delicate skin.', imageUrl: 'https://placehold.co/400x400.png', category: 'baby-care' },
  { id: 'prod-019', name: 'Claritin Loratadine Tablets', price: 15.00, description: 'Non-drowsy 24-hour allergy relief.', imageUrl: 'https://placehold.co/400x400.png', category: 'medicine' },
  { id: 'prod-020', name: 'Vichy Mineral 89 Hyaluronic Acid Serum', price: 32.00, description: 'Hydrates and plumps skin.', imageUrl: 'https://placehold.co/400x400.png', category: 'cosmetic' },
  { id: 'prod-021', name: 'Imodium A-D Caplets', price: 6.99, description: 'Controls the symptoms of diarrhea.', imageUrl: 'https://placehold.co/400x400.png', category: 'medicine' },
  { id: 'prod-022', name: 'Calcium + Vitamin D3 Tablets', price: 13.20, description: 'Supports bone health.', imageUrl: 'https://placehold.co/400x400.png', category: 'wellness' },
  { id: 'prod-023', name: 'Bepanthen Nappy Care Ointment', price: 7.00, description: 'Protects against nappy rash.', imageUrl: 'https://placehold.co/400x400.png', category: 'baby-care' },
  { id: 'prod-024', name: 'Telfast 180mg Antihistamine', price: 14.50, description: 'Relief of symptoms of hayfever & itchy skin rash.', imageUrl: 'https://placehold.co/400x400.png', category: 'medicine' },
  { id: 'prod-025', name: 'Bioderma Sensibio H2O Micellar Water', price: 19.99, description: 'Gently cleanses and removes makeup from face and eyes.', imageUrl: 'https://placehold.co/400x400.png', category: 'cosmetic' },
  { id: 'prod-026', name: 'Neurofen Zavance Fast Pain Relief 200mg', price: 5.00, description: 'Absorbed up to 2x faster than standard ibuprofen.', imageUrl: 'https://placehold.co/400x400.png', category: 'medicine' },
  { id: 'prod-027', name: 'Swisse Ultivite Men\'s Multivitamin', price: 28.00, description: 'Premium quality formula to support men’s health.', imageUrl: 'https://placehold.co/400x400.png', category: 'wellness' },
  { id: 'prod-028', name: 'Mustela Gentle Cleansing Gel', price: 12.00, description: 'Cleans and soothes baby\'s hair and body.', imageUrl: 'https://placehold.co/400x400.png', category: 'baby-care' },
  { id: 'prod-029', name: 'Dulcolax Laxative Tablets', price: 8.50, description: 'Provides effective overnight relief from constipation.', imageUrl: 'https://placehold.co/400x400.png', category: 'medicine' },
  { id: 'prod-030', name: 'Nuxe Huile Prodigieuse Multi-Purpose Dry Oil', price: 35.00, description: 'Nourishes, repairs and beautifies face, body and hair.', imageUrl: 'https://placehold.co/400x400.png', category: 'cosmetic' },
  { id: 'prod-031', name: 'Betadine Sore Throat Gargle', price: 9.20, description: 'Kills germs that cause sore throats.', imageUrl: 'https://placehold.co/400x400.png', category: 'medicine' },
  { id: 'prod-032', name: 'Swisse Ultivite Women\'s Multivitamin', price: 28.00, description: 'Premium quality formula to support women’s health.', imageUrl: 'https://placehold.co/400x400.png', category: 'wellness' },
  { id: 'prod-033', name: 'WaterWipes Baby Wipes', price: 4.50, description: 'The world\'s purest baby wipes, 99.9% water.', imageUrl: 'https://placehold.co/400x400.png', category: 'baby-care' },
  { id: 'prod-034', name: 'Canesten Clotrimazole Cream 1%', price: 10.80, description: 'Effective treatment for fungal skin infections.', imageUrl: 'https://placehold.co/400x400.png', category: 'medicine' },
  { id: 'prod-035', 'name': 'Avene Thermal Spring Water', 'price': 14.00, 'description': 'Soothing spray for sensitive skin.', 'imageUrl': 'https://placehold.co/400x400.png', 'category': 'cosmetic' },
  { id: 'prod-036', name: 'Duro-Tuss Chesty Cough Liquid', price: 12.00, description: 'Helps break down and clear chest congestion.', imageUrl: 'https://placehold.co/400x400.png', category: 'medicine' },
  { id: 'prod-037', name: 'Blackmores Bio C 1000mg', price: 19.50, description: 'High potency one-a-day dose of vitamin C.', imageUrl: 'https://placehold.co/400x400.png', category: 'wellness' },
  { id: 'prod-038', name: 'Gaia Natural Baby Moisturiser', price: 11.00, description: 'A nourishing and calming moisturiser for baby skin.', imageUrl: 'https://placehold.co/400x400.png', category: 'baby-care' },
  { id: 'prod-039', name: 'Mylanta Antacid Liquid', price: 6.75, description: 'Fast relief for indigestion, heartburn, and gas.', imageUrl: 'https://placehold.co/400x400.png', category: 'medicine' },
  { id: 'prod-040', name: 'Kiehl\'s Ultra Facial Cream', price: 38.00, description: '24-hour, light-textured daily hydrator.', imageUrl: 'https://placehold.co/400x400.png', category: 'cosmetic' },
  { id: 'prod-041', name: 'Vicks VapoRub Ointment', price: 7.90, description: 'Relieves cough and cold symptoms.', imageUrl: 'https://placehold.co/400x400.png', category: 'medicine' },
  { id: 'prod-042', name: 'Nature\'s Way Magnesium 600mg', price: 15.50, description: 'Supports muscle health and relaxation.', imageUrl: 'https://placehold.co/400x400.png', category: 'wellness' },
  { id: 'prod-043', name: 'Curash Babycare Medicated Nappy Rash Cream', price: 8.00, description: 'Soothes, heals and protects baby\'s skin.', imageUrl: 'https://placehold.co/400x400.png', category: 'baby-care' },
  { id: 'prod-044', name: 'Lamisil Cream for Athlete\'s Foot', price: 13.50, description: 'Kills the fungus that causes athlete\'s foot.', imageUrl: 'https://placehold.co/400x400.png', category: 'medicine' },
  { id: 'prod-045', name: 'L\'Occitane Shea Butter Hand Cream', price: 29.00, description: 'Richly textured and fast-absorbing hand cream.', imageUrl: 'https://placehold.co/400x400.png', category: 'cosmetic' },
  { id: 'prod-046', name: 'Codral Cold & Flu Tablets', price: 10.00, description: 'Day and night formula for cold and flu symptoms.', imageUrl: 'https://placehold.co/400x400.png', category: 'medicine' },
  { id: 'prod-047', name: 'Berocca Performance Effervescent Tablets', price: 16.00, description: 'Helps support mental sharpness and physical energy.', imageUrl: 'https://placehold.co/400x400.png', category: 'wellness' },
  { id: 'prod-048', name: 'Tommee Tippee Closer to Nature Baby Bottles', price: 25.00, description: 'Breast-like shape for a natural latch.', imageUrl: 'https://placehold.co/400x400.png', category: 'baby-care' },
  { id: 'prod-049', name: 'Buscopan Forte Tablets 20mg', price: 11.80, description: 'Relief from stomach cramps and IBS symptoms.', imageUrl: 'https://placehold.co/400x400.png', category: 'medicine' },
  { id: 'prod-050', name: 'Drunk Elephant T.L.C. Framboos Glycolic Night Serum', price: 90.00, description: 'AHA/BHA night serum to resurface skin.', imageUrl: 'https://placehold.co/400x400.png', category: 'cosmetic' },
];
