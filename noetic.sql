GO
Create Schema Entity
GO


/*Enity Start */
/*Enity Start */
/*Enity Start */
/*Enity Start */


/* Defines the Fields that a required for a type Entity
These can be identifiers or other datapoints
Currently these are scalar fields

Challenge how to handle objects such as the Entity needs an Address, and address will be a grouping of fields/record

Example
US Address vs UK Address
NASDAQ Listing vs NYSE Listing

 */
/*This table holds the data for the Entity, there is a field identifier 
and EntityID and the Data of the field.
This table will hold mostly identifiers and other entity information
*/
create table Entity.EntityData
(
EntityDataID int not null identity (1,1), -- Primary Key
EntityID int not null , -- Key to the EntityTable
EntityFieldID int null FOREIGN KEY REFERENCES Entity.Fields (EntityFieldID), --FK to the Fields table
EntityData varchar(255) -- Actual Data
)
-- Natural Person
-- Juridical Persons Any Non-Natural Person  (Corporations) , Government, Non-For Profits
-- What are the types of Juridical Persons ?
-- Beneficial Owners -- People that own a company
-- Example

Justin     Steve       Chris
   \ 98%     | 1%     / 1%
            Apple

            
/* Entity Table an Entity can only be of one Type
There may be other data in this table yet to be determined
 */
create table Entity.Entity
(
    EntityID int identity (1,1) not null,
    EntityTypeID int not null FOREIGN KEY REFERENCES Entity.EntityType (EntityTypeID) ,
    --May have other fields like EntityName etc to be determined
    CONSTRAINT PK_EntityID PRIMARY KEY CLUSTERED (EntityID)
)


/* EntityTypes will have data that is captured for the Entity such as identifiers
This table defines the data that is required for Entity that should be collected
Another table or a view will be needed to show which data is missing or or incomplete for 
and EntityType
 */
Create Table Entity.EntityDataDTD
(
EntityDataDTDID int IDENTITY (1,1),
EntityTypeID int not null,
--EntityDataTypeID int, --This is the type of data that will be allowedin the field
EntityFieldID int not null, /* These would be field ID's of the fields that describe the Entity*/
MaxOccurs int not null /*if MaxOccurs = 0 then the field is not required, 1 means the field is unique, other numbers have other logic*/
--FieldValidation varchar(100) not null /* This describes the type of validation that would be performed on the field*/
)


EntityType to EntityDataMapping

EntityDataTypeID
EntityTypeID


/* Keeps a listing of all of the fields */
Create table Entity.Fields
(
    FieldID int not null identity (1,1),
    FieldName varchar(255) not null, -- Unique Index
    FieldDescription varchar(255) not null, --Description of what the field is used for
    FieldValidation varchar(255) not null
)


--DataType Table
/* Scalar Data Type vs Complex data type*/

/* These are the different types of entities that can exist*/
create table Entity.EntityType
( EntityTypeID int identity (1,1) not null primary key ,
  EntityTypeName varchar(100) not null)

 insert into EntityType (EntityTypeName) values ('Person') 
 insert into EntityType (EntityTypeName) values ('LLC') 
 insert into EntityType (EntityTypeName) values ('SCorp') 
 insert into EntityType (EntityTypeName) values ('MutualFund') 
 insert into EntityType (EntityTypeName) values ('SovereignFund') 

/*
Challenge how to describe an entity of type Corporation, but it is an non-US corporation and 
that corporation type will require different types of information
*/ 
 -- Describe Valid entity Role Combinations
 /*
EntityType-Role Mappings TABLE
This table limits the types of Roles that an Entity type can have
Entities can have different Roles which will dictate the types of objects that the entity can 
be associated with or assigned to .


Person Requires
Roles -- Roles are relative to other entities
Address (object)  , Address have address Types
Identifying Information - Mostly Scalar information but can be complex
Domocile Address -- A type of address
Age -- Scalar
ContactInformation (object)
Billing Address



Company Requires
Identifiers
Roles Relative to other Entities or Objects

*/

/* RoleMapping is a mapping of Entities to Roles 
This Might Need to accomodate if an Enity is playing a Role in an Transaction
An Entity could play different Roles in a transaction Type
Like an offering , or an issuance 
There can be a default 0 transaction type which is Primary/Default Role
*/
-- Look into RoleTransactionMapping
-- Qualifications of Entities, Datapoint or workflow style
-- Workflow steps completed
-- Roles that a person related to the organization might have

-- Roles could be regulatory roles, or certifications
-- A Entity can have certain roles if they have certain data  
RoleCertificationsTable 
-- A role will required specific certifications
-- CertificationType -- Table of certification

CertificationsTable -- Keeps track of the certifications that person has
ID
CerficationID
AuthorizedByID
GoodFrom
GoodUntil



Create table Entity.RoleMapping
(
RoleMappingID int identity (1,1) not null,    
EntityID int not null FOREIGN KEY REFERENCES Entity.Entity (EntityID),
RoleID int not null FOREIGN KEY REFERENCES Enity.Role (RoleID),
TransactionTypeID int not NUll FOREIGN KEY REFERENCES Enity.TransactionType (RoleID),
CONSTRAINT ER_EntityRoleMapping unique (EntityID,RoleID,TransactionTypeID),
CONSTRAINT PK_RoleMappingID PRIMARY KEY CLUSTERED (RoleMappingID)
)

/*  NOT USED 
Transaction Types that an Entity is allow to participate in
This table will be populated when an Entity is created it should be joined with the
default allowed transaction types  
This may be used to setup the default transaction types allowed by an EntityType
NOT USED*/
create table Entity.TransactionTypesAllowed
(
TransactionTypesAllowedID int IDENTITY (1,1) not null,
EntityTypeID int not null  FOREIGN KEY REFERENCES Entity.EntityType(EntityTypeID), -- FK to entityTypeTable
TransactionTypeID int not null FOREIGN KEY REFERENCES Enity.TransactionType (TransactionTypeID) -- FK to TransactionType table
)

/* Defaults to the 0 "Default" TransactionClass Type 
Only using the default transactiontypeclassid of zero now

*/
create table Entity.TransactionType
(TransactionTypeID int identity (1,1) not null,
TransactionTypeName varchar(255) not null ,
TranactionTypeClassID int not null default (0) , -- This would allow for different class of transaction types if necessary 
CONSTRAINT ER_EntityTransactionTypes unique (TranacttionTypeName),
)
/* The Default tranaction class will be Class 1 
Transaction Classes can be used to group types of transactions together
For example a person Entity Type can not participate in a transaction type of Issue a Security
The Unique Index on view an enforce this type of logic 
Might be overkill
*/
create table Entity.TransactionClass
(TransactionClassID int identity (1,1),
TranactionClassName varchar(255)
)
-- Insert the default value into the transactionClass table
set identity_insert Entity.TransactionClass on;
insert into Entity.TransactionClass (TransactionClassName) values ('Default')

-- Names Roles because Role is a keyword
 create table Entity.Roles 
 (
  EntityRoleID int identity(1,1) not null,
  EntityRoleName varchar(100) not null ,
  EntityRoleDescription varchar(255) not null default('Description not specified'),
  RoleTypeID int not null, --FK to Role Type Table
 CONSTRAINT ER_EntityRoleName unique (EntityRoleName), -- Unique Constraint  for EntityRoleName 
 CONSTRAINT PK_EntityRoleID PRIMARY KEY CLUSTERED (EntityRoleID)
 )

-- Can a role be a type of entity
-- Can a role be a group

-- Group is a collection of entities -- A group is a relationship where everyone is a child of the group entity

-- Entity Group
-- Entity Type 
      -- Group
 -- Name
      Group 1


/* 
 Describes Classes of Role Types  This will be the SETUPDATA Schema
The setup data schema will hold the general setup data for the  Model
items like RoleTypes, and General Setup Data
*/

/* Role Type will be different , There will be Types of Roles, perhaps RoleTypes
will be mapped to Entity Types or Transaction types , this would be used to Drive a UI
,business Logic or enforce a contraint in the database, currently there will be a "Default" RoleType only*/
create table RoleType (
RoleTypeID int identity(1,1) not null,
RoleTypeName varchar(100) not NULL
CONSTRAINT R_RoleTypeName unique (RoleTypeName), -- Unique Constraint  for EntityRoleName 
CONSTRAINT PK_RoleTypeID PRIMARY KEY CLUSTERED (RoleTypeID)
)


/* 
How do we deal with addresss and field dependencies? Collect the basic fields
then there will be a JSON object which can collect everything else in a structured form
The pluscode should be able to handle localization issues.
 */

/* Expresses the relationships that Entities have with each other 
The intent here is to simulate a graph so that the Relationship will point FROM an
Entity TO another Entity , the relationship can have a weight
*/

-- Only Parties who are "Authorized Legal Entities" can participate in US Stock ownership
-- Pre-IPO Stock only accessible to QIB , QIB is another Entity Type
-- QIB Will be a property of the Entity, and that field will require authorization

Create table EntityRelationship
(	
EntityRelationshipID int identity (1,1) not null,
ToEntity int not null,
FromEntity int not null,
RelationshipRoleID int not null, -- Common , Restricted , Voting, Special Shares (ownership)
RelationshipTypeID int not null, -- Ownership of Apple Entity Related
RelationshipWeight decimal not null /*Weight of the relationship*/
/* Add a check constraint that the sum of the weights of a EntityRelationshipTypeID pointing TO and Entity
 must be <= 1 */
)

--Represent this structure in the tables

                     Parent
                  /             \   
          Mother                Father
       /        \                   \
Step Father    Step Father        Step Father


RelationshipTypeID = Ownership


Justin     Steve J      Chris
   \ 98%     | 1%     / 1%
            Apple
          /       \
  Apple SPV (IP)    Beats (Hardware)


               Steve J (President)
                /    \
Steve W (Software)   Justin (Hardware)

-- Beats  Illustrate this relationship

                Beats
                 | 
              Dr Dre.   (Role:President) 
      /    Reports to         \  Reports to   
   Joe (Role :Headsets)             Bill (Role: Boxes) 





                    1 - Equity Ownership  100%

1.1  Restricted   1.2 Common  1.3Restricted Options   1.4Convertible  1.5Convertible  1.6ADR  1.7Participation Certifcates
            
            1.2.1 Options Contract    1.4.1 Option

            1.2.1.1 Options Derivative 


     Exchange Structure    

         CFTC     SEC  FINRA      SIPC     
             \     |    /       /  
                 Exchange
                       \            \                        \
                      Regulators    Clearing              Markets
                         |            |                      |
                     Auditors    Settlement Agency       Market Maker
                                      |                        |
                                Custodian Banks             Brokers
                                                                |
                                                             Investors



Exclusivity of relationships ie a regulator cant be a market maker

In every Role there are metrics or operations that each role must perform






--Free Float or not Free Float





--Equity Kickers (Business Logic)
--CFI Describes how the instruments work
-- 8

  --Ownership (Types)
  ----CommonStock , Preferred Stock, Founder Stock 
  ------

-- Relationship Terms  Modelling 

--Relationship TYPE
   --LLC (Shares of Ownership)
   
   --Bond owners

--Authorized Shares vs Issued Shares 
--IBM 1MM Shares  --200k Owned by managment not free to float if there are any restrictions
--Freefloat 800k are these the shares in the market?

-- Entity Type Group
-- Example
-- NoeticSalesTeam -- Services  --> Dunlap Familty Trust
-- Entity of Type Group


--Describe FreeFloat from Wikipedia Investopedia
-- Think about the share types  Class A vs other Class of stock Common
-- Special Dividend, shares not diluted
-- Initial offered shares have better value.
-- There is ownership but there are different terms

Justin     Steve       Chris
   \ 98%     | 1%     / 1%
            Apple



Apple  100% Authorized 1MM Shares  Started
      Issue --50% of Authorized shares to Founders
      Issue --10% of the Shares sold to SVB values company at $10 a share
      Issue --5% sold @ $20 to other investor
      Corporate action --Stock split 2:1
      Issue --10% (5%) of the authorized 2MM shares IPO $20
      Issue --2% Management Bonus Allocation Restricted not FreeFloat vesting 2 years
 Not Issued --28% Authorized but not Issued



    - Steve 5% Voting            CFI1 - Restrict
    - Justin 5% Non-Voting       CFI2  - 
    - Treasury   10% Restricted
    - Vested Shares become Free Float

    - Common Shares 90%          CFI3
                                   options
                                   Futures


/*Entity Base Domain */
create table EntityRelationshipType
(
    EntityRelationshipTypeID int identity(1,1),
    EntityRelationshipTypeName varchar(100) not null, /* Must Be unique*/
)

/*Enity End */
/*Enity End */
/*Enity End */
/*Enity End */
/*Enity End */

--a Group is a type of Entity
--Groups Relationships

                Justin Leader               
               /               \
Diane  Sale Lead                Chris Tech Guy







/* Addresses Start */
/* Addresses Start */
/* Addresses Start */
/* Addresses Start */

/* Considerations and Questions */
/* Consider some Entities will require certain types of addresses so that the address will
be captured or required  by the frontend */


/* Maps entities to addresses */
create table  Entity.AddressMapping(
EntityAddressMappingID int identity (1,1) not null,
EntityID int not null FOREIGN KEY REFERENCES Entity.Entity (EntityID) , 
AddressID int not null FOREIGN KEY REFERENCES Entity.Address (AddressID) , 
AddressTypeID int not null, /* Reference Address Type Table  so that we know what type of address this is for the entity*/
CONSTRAINT PK_Entity_ADDRESS_MAPPING PRIMARY KEY CLUSTERED (EntityAddressMappingID),
CONSTRAINT UX_ENTITY_ADDRESSID_ADDRESSTYPEID UNIQUE (EntityID,AddressID,AddressTypeID)
/* Added a unique contraint for Entity AddressID and AddressTypeID so that an Entity can
only have an address of an address Type once, there may be cases where the Entity will
require more than one Address Type but consider the constraint of an entity being able to have
an address of a type only once, this could be enforce with different INDEXED Views 
depending on the clients needs */ 
)

/* 
Address uses a the opensource pluscode as well as the standard address data for the address
https://plus.codes/
*/
-- This table should be marked temporal

create table Entity.Address (
AddressID int identity (1,1) not null,
AddressLine1 varchar(255), /* Standard Address Line Information should be  validated before being committed to the database*/
AddressLine2 varchar(255),
AddressLine3 varchar(255),
City varchar(255), -- Not validated except via pluscode API or front end API
Country_Province varchar(255), -- Not validated except via pluscode API or front end API
zip_postalCode varchar(255), -- Not validated except via pluscode API or front end API
CountryCode varchar(10) not null FOREIGN KEY REFERENCES ISO.ISOCountryCode (CountryCode),
PlusCode varchar(255), -- References the plus code of the address
PlusCodeJSON  varchar(255), -- JSON of the pluscode data
OtherAddressDetails varchar(255), /* JSON Object of floor number etc*/
AddressSource varchar(255), -- Coded source of the address
CONSTRAINT PK_Entity_ADDRESSID PRIMARY KEY CLUSTERED (AddressID)
)

/* 
Table of address types this table should only be accessible to data stewards it is
meta data and must only be configured at setup
Examples : Mailling Address, Billing Address, Legal Entity Address , Country of Domicile ,etc
*/
Create table Entity.AddressType 
(AddressTypeID int identity (1,1) not null,
AddressTypeName varchar(255) not null,
AddressTypeDescription varchar(255) not null 
)

insert into Entity.AddressType (AddressTypeName,AddressTypeDescription) VALUES ('Mailing Address', 'Mailing Address')
insert into Entity.AddressType (AddressTypeName,AddressTypeDescription) VALUES ('Billing Address', 'Billing Address')
insert into Entity.AddressType (AddressTypeName,AddressTypeDescription) VALUES ('Address', 'Address of Domicile')

/* Addresses End */
/* Addresses End */
/* Addresses End */
/* Addresses End */
/* Addresses End */


-- Address
-- Gender


--
authorized products -- Remove
bank information -- Remove
calendar information -- Rework
Client  -- Remove
Contract*  -- Remove
Contact   -- Remove  CRM
ContactType  -- Remove CRM
ConversionTerms* -- Remove
Coupon -- Remove
CouponType -- Remove
Currency* --ISO Table
Custodian -- Move to Entity
CustodyType -- Move to Entity
Debt* -- Remove
Demerger -- Remove
Document* -- Remove
DUNSRecord -- This would go into identifiers
Equity* -- Remove
Event* -- Consolidate with Calendar
Fee* -- Remove
GeoLocationPoint -- Consolidate with Address
GlobalAccount* -- Remove
GMEIRecord -- Identifiers
ISO.GlobalIndustryStandard  -- Move to Identifiers
ImmigrationType -- Remove
IncorporationChange -- Refactor
Index* -- Instrument Database
Individual -- Move to Entity
IndustrialClassification -- Move to Classifications / Identifiers
InheritanceType -- Remove
InstitutionalLegalEntity -- Move to Entity
InterestRate* -- Remove
InvestmentGoal -- Remove
InvestmentObjective* -- Remove
ISO* --These all go into the ISO Schema
Issue* ? -- Need to pare these down
LegalDocument* -- Remove
LegalEntity* -- These would get moved to Entity
LineOfCredit* -- Remove
Liquidation-- Remove
LiquidityMeasurement* -- Remove
ListingStatusChange -- GO into a status Table
LotChange -- Remove
Mandate* -- Remove
MarketType -- ISO Table
MorningStarCategory -- Move to identifiers
MorningStarFundStyle -- Move to Identifiers
MutualFund* -- Change how this is handled
NewListing --REMOVE
NOrthAmericanIndustryClassification -- Move to identifiers
Notification* --REMOVE
Occupation -- Move to ISO Data
Option* -- Instrument Database
Order* -- Remove
OrganizationalUnit -- Move this to hierarchy
ParentDocumentType -- Remove
Party -- Consolidate the Party to the Entity tables
Payment* -- Remove
Portfolio* -- Refactored










-- Get a list of tables and views in the current database
SELECT table_catalog [database], table_schema [schema], table_name name, table_type type
FROM INFORMATION_SCHEMA.TABLES
GO


/* ISO Domain
All of the ISO Tables will exist in the ISO Domain 
*/
GO
/*create the schema for ISO tables this will be authoritative data*/
create SCHEMA ISO 
go
--ISO3166 Country Table
Create table ISO.ISOCountry (
CountryName varchar(255) not null,
OfficialStateName varchar(255) not null,
Sovereignty varchar(255) not null,
Alpha2Code varchar(2) not null,
Alpha3Code varchar(3) not null,
NumericCode smallint not null,
InternetccTLD varchar(10) not null
)


