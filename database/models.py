# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 10, 2024 12:09:26
# Database: sqlite:////tmp/tmp.3XDJsFbv7r/dentaloffice/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Dentist(SAFRSBaseX, Base):
    """
    description: Table to store dentist details.
    """
    __tablename__ = 'dentists'
    _s_collection_name = 'Dentist'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    specialty = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    AppointmentList : Mapped[List["Appointment"]] = relationship(back_populates="dentist")



class Insurance(SAFRSBaseX, Base):
    """
    description: Table to store insurance details.
    """
    __tablename__ = 'insurances'
    _s_collection_name = 'Insurance'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    PatientInsuranceList : Mapped[List["PatientInsurance"]] = relationship(back_populates="insurance")



class Patient(SAFRSBaseX, Base):
    """
    description: Table to store patient details.
    """
    __tablename__ = 'patients'
    _s_collection_name = 'Patient'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    date_of_birth = Column(DateTime)
    phone_number = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    AppointmentList : Mapped[List["Appointment"]] = relationship(back_populates="patient")
    PatientInsuranceList : Mapped[List["PatientInsurance"]] = relationship(back_populates="patient")
    PrescriptionList : Mapped[List["Prescription"]] = relationship(back_populates="patient")



class Staff(SAFRSBaseX, Base):
    """
    description: Table to maintain staff information.
    """
    __tablename__ = 'staff'
    _s_collection_name = 'Staff'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    role = Column(String)
    start_date = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)



class Supplier(SAFRSBaseX, Base):
    """
    description: Table to store supplier details.
    """
    __tablename__ = 'suppliers'
    _s_collection_name = 'Supplier'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    contact_number = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    InventoryList : Mapped[List["Inventory"]] = relationship(back_populates="supplier")



class Treatment(SAFRSBaseX, Base):
    """
    description: Table to store treatment details.
    """
    __tablename__ = 'treatments'
    _s_collection_name = 'Treatment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(String)
    cost = Column(Float)

    # parent relationships (access parent)

    # child relationships (access children)
    AppointmentTreatmentList : Mapped[List["AppointmentTreatment"]] = relationship(back_populates="treatment")



class Appointment(SAFRSBaseX, Base):
    """
    description: Table to store appointment details.
    """
    __tablename__ = 'appointments'
    _s_collection_name = 'Appointment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    patient_id = Column(ForeignKey('patients.id'), nullable=False)
    dentist_id = Column(ForeignKey('dentists.id'), nullable=False)
    appointment_datetime = Column(DateTime, nullable=False)
    notes = Column(String)

    # parent relationships (access parent)
    dentist : Mapped["Dentist"] = relationship(back_populates=("AppointmentList"))
    patient : Mapped["Patient"] = relationship(back_populates=("AppointmentList"))

    # child relationships (access children)
    AppointmentTreatmentList : Mapped[List["AppointmentTreatment"]] = relationship(back_populates="appointment")
    PaymentList : Mapped[List["Payment"]] = relationship(back_populates="appointment")



class Inventory(SAFRSBaseX, Base):
    """
    description: Table to manage dental supplies and tools inventory.
    """
    __tablename__ = 'inventory'
    _s_collection_name = 'Inventory'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    item_name = Column(String, nullable=False)
    quantity = Column(Integer)
    supplier_id = Column(ForeignKey('suppliers.id'), nullable=False)

    # parent relationships (access parent)
    supplier : Mapped["Supplier"] = relationship(back_populates=("InventoryList"))

    # child relationships (access children)



class PatientInsurance(SAFRSBaseX, Base):
    """
    description: Table to associate patients with their insurance plans.
    """
    __tablename__ = 'patient_insurances'
    _s_collection_name = 'PatientInsurance'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    patient_id = Column(ForeignKey('patients.id'), nullable=False)
    insurance_id = Column(ForeignKey('insurances.id'), nullable=False)
    policy_number = Column(String)

    # parent relationships (access parent)
    insurance : Mapped["Insurance"] = relationship(back_populates=("PatientInsuranceList"))
    patient : Mapped["Patient"] = relationship(back_populates=("PatientInsuranceList"))

    # child relationships (access children)



class Prescription(SAFRSBaseX, Base):
    """
    description: Table to store prescription details.
    """
    __tablename__ = 'prescriptions'
    _s_collection_name = 'Prescription'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    patient_id = Column(ForeignKey('patients.id'), nullable=False)
    medicine_name = Column(String, nullable=False)
    dosage = Column(String)
    prescribed_date = Column(DateTime)

    # parent relationships (access parent)
    patient : Mapped["Patient"] = relationship(back_populates=("PrescriptionList"))

    # child relationships (access children)



class AppointmentTreatment(SAFRSBaseX, Base):
    """
    description: Table to associate treatments with appointments.
    """
    __tablename__ = 'appointment_treatments'
    _s_collection_name = 'AppointmentTreatment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    appointment_id = Column(ForeignKey('appointments.id'), nullable=False)
    treatment_id = Column(ForeignKey('treatments.id'), nullable=False)

    # parent relationships (access parent)
    appointment : Mapped["Appointment"] = relationship(back_populates=("AppointmentTreatmentList"))
    treatment : Mapped["Treatment"] = relationship(back_populates=("AppointmentTreatmentList"))

    # child relationships (access children)



class Payment(SAFRSBaseX, Base):
    """
    description: Table to record payment transactions.
    """
    __tablename__ = 'payments'
    _s_collection_name = 'Payment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    appointment_id = Column(ForeignKey('appointments.id'), nullable=False)
    amount_paid = Column(Float)
    payment_date = Column(DateTime)

    # parent relationships (access parent)
    appointment : Mapped["Appointment"] = relationship(back_populates=("PaymentList"))

    # child relationships (access children)
