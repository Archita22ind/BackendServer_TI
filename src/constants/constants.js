const Indeed = require("../models/indeed.model");
const LinkedIn = require("../models/linkedin.model");

const JOB_BOARDS = [Indeed, LinkedIn];

const SKILL_SET =[  'Java', 'REST','CI/CD','C#','React','JavaScript','ReactJS','RESTful',
                    'NodeJS','SQL','MongoDB','Python','.NET','Ruby', 'Golang',
                    'Backend','Frontend','Full-Stack','CSS',
                    'HTML','Docker','Redis','Redux','Kafka','AWS',
                    'J2EE','Spring','PHP','Express','WordPress','gRPC','RPC','C+/+',
                    ,'Kubernetes','Cloud','DevOps','GCP',
                    'Azure','Elixir','Angular','Vue','SOAP','Cassandra','MySQL', 
                    'Oracle', 'Linux', 'TypeScript',
                    'React-Native','Object-Oriented','Hadoop', 'GraphQL','Swift','Express', 
                   'Rails','MVC','PostgreSQL', 'Kotlin', 'iOS','Android',
                    'gaming', 'networking','TCP', 'Embedded','NoSQL', 'Rust', 'Perl',
                   'Git',
               
                ];

exports.JOB_BOARDS = JOB_BOARDS;
exports.SKILL_SET = SKILL_SET;
