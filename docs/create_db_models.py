import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py



import sqlite3
from datetime import datetime
from sqlalchemy import create_engine, Column, Integer, String, DateTime, ForeignKey, Boolean, Float
from sqlalchemy.orm import declarative_base, sessionmaker

# Define the SQLite URL
DATABASE_URL = 'sqlite:///system/genai/temp/create_db_models.sqlite'

# Create the engine
engine = create_engine(DATABASE_URL, echo=False)

# Declare a base for the models
Base = declarative_base()

# Define the database models
class Patient(Base):
    """description: Table to store patient details."""
    __tablename__ = 'patients'
    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    date_of_birth = Column(DateTime, nullable=True)
    phone_number = Column(String, nullable=True)

class Dentist(Base):
    """description: Table to store dentist details."""
    __tablename__ = 'dentists'
    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    specialty = Column(String, nullable=True)

class Appointment(Base):
    """description: Table to store appointment details."""
    __tablename__ = 'appointments'
    id = Column(Integer, primary_key=True, autoincrement=True)
    patient_id = Column(Integer, ForeignKey('patients.id'), nullable=False)
    dentist_id = Column(Integer, ForeignKey('dentists.id'), nullable=False)
    appointment_datetime = Column(DateTime, nullable=False)
    notes = Column(String, nullable=True)

class Treatment(Base):
    """description: Table to store treatment details."""
    __tablename__ = 'treatments'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(String, nullable=True)
    cost = Column(Float, nullable=True)

class AppointmentTreatment(Base):
    """description: Table to associate treatments with appointments."""
    __tablename__ = 'appointment_treatments'
    id = Column(Integer, primary_key=True, autoincrement=True)
    appointment_id = Column(Integer, ForeignKey('appointments.id'), nullable=False)
    treatment_id = Column(Integer, ForeignKey('treatments.id'), nullable=False)

class Insurance(Base):
    """description: Table to store insurance details."""
    __tablename__ = 'insurances'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)

class PatientInsurance(Base):
    """description: Table to associate patients with their insurance plans."""
    __tablename__ = 'patient_insurances'
    id = Column(Integer, primary_key=True, autoincrement=True)
    patient_id = Column(Integer, ForeignKey('patients.id'), nullable=False)
    insurance_id = Column(Integer, ForeignKey('insurances.id'), nullable=False)
    policy_number = Column(String, nullable=True)

class Payment(Base):
    """description: Table to record payment transactions."""
    __tablename__ = 'payments'
    id = Column(Integer, primary_key=True, autoincrement=True)
    appointment_id = Column(Integer, ForeignKey('appointments.id'), nullable=False)
    amount_paid = Column(Float, nullable=True)
    payment_date = Column(DateTime, nullable=True)

class Prescription(Base):
    """description: Table to store prescription details."""
    __tablename__ = 'prescriptions'
    id = Column(Integer, primary_key=True, autoincrement=True)
    patient_id = Column(Integer, ForeignKey('patients.id'), nullable=False)
    medicine_name = Column(String, nullable=False)
    dosage = Column(String, nullable=True)
    prescribed_date = Column(DateTime, nullable=True)

class Supplier(Base):
    """description: Table to store supplier details."""
    __tablename__ = 'suppliers'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    contact_number = Column(String, nullable=True)

class Inventory(Base):
    """description: Table to manage dental supplies and tools inventory."""
    __tablename__ = 'inventory'
    id = Column(Integer, primary_key=True, autoincrement=True)
    item_name = Column(String, nullable=False)
    quantity = Column(Integer, nullable=True)
    supplier_id = Column(Integer, ForeignKey('suppliers.id'), nullable=False)

class Staff(Base):
    """description: Table to maintain staff information."""
    __tablename__ = 'staff'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    role = Column(String, nullable=True)
    start_date = Column(DateTime, nullable=True)

# Create all tables
Base.metadata.create_all(engine)

# Create a session
Session = sessionmaker(bind=engine)
session = Session()

# Add sample data
sample_data = [
    # Patients
    Patient(first_name='John', last_name='Doe', date_of_birth=datetime(1980, 1, 1), phone_number='1234567890'),
    Patient(first_name='Jane', last_name='Smith', date_of_birth=datetime(1990, 2, 15), phone_number='0987654321'),
    
    # Dentists
    Dentist(first_name='Alice', last_name='Jones', specialty='Orthodontics'),
    Dentist(first_name='Bob', last_name='Brown', specialty='Pediatrics'),
    
    # Treatments
    Treatment(name='Cleaning', description='Regular teeth cleaning', cost=75.0),
    Treatment(name='Filling', description='Dental filling treatment', cost=150.0),

    # Insurance
    Insurance(name='HealthCorp Initiative'),
    Insurance(name='DentalCare Network'),

    # Appointments
    Appointment(patient_id=1, dentist_id=1, appointment_datetime=datetime(2023, 6, 20, 10, 30)),
    Appointment(patient_id=2, dentist_id=2, appointment_datetime=datetime(2023, 6, 21, 11, 0)),

    # Prescriptions
    Prescription(patient_id=1, medicine_name='Ibuprofen', dosage='200mg', prescribed_date=datetime(2023, 6, 20)),

    # Suppliers
    Supplier(name='MedSupply Ltd.', contact_number='111222333'),
    Supplier(name='Dental Tools Inc.', contact_number='444555666'),

    # Inventory
    Inventory(item_name='Dental Floss', quantity=100, supplier_id=1),
    Inventory(item_name='X-ray Film', quantity=50, supplier_id=2),

    # Staff
    Staff(name='Chris Green', role='Receptionist', start_date=datetime(2022, 5, 10)),
    Staff(name='Eve White', role='Dental Assistant', start_date=datetime(2021, 3, 20)),

    # Payments
    Payment(appointment_id=1, amount_paid=100.0, payment_date=datetime(2023, 6, 20)),

    # Appointment Treatments
    AppointmentTreatment(appointment_id=1, treatment_id=1),
    AppointmentTreatment(appointment_id=2, treatment_id=2),

    # Patient Insurance
    PatientInsurance(patient_id=1, insurance_id=1, policy_number='1234A'),
    PatientInsurance(patient_id=2, insurance_id=2, policy_number='5678B')
]

# Add all sample data
session.add_all(sample_data)

# Commit the session to the database
session.commit()

# Close the session
session.close()
